"use client";

import { useEffect, useLayoutEffect } from "react";

/*
 * サイト全体の動き(2026-11-03 施主指示「転職エージェント比較ラボのようなアニメーションをこのサイトにも全体的に」)。
 * 転職ラボの ScrollMotion.tsx と同じ作りにしている。2026-10-02 版(パートナーエージェント参考)を置き換え。
 *
 *  - DOMは増やさない。既存要素に data 属性を付けるだけ
 *  - 「非表示」の初期状態はJSが付ける → JSが動かない環境では最初から全部見えている
 *  - scrollイベントで「画面下端より上に来たものは無条件に表示」する掃き出しを必ず回す
 *    (監視の取りこぼしに依存しない。旧版にはこれが無く、速いスクロールで透明のまま残るおそれがあった)
 *  - 1.2秒の保険タイマーも置く
 *  - prefers-reduced-motion: reduce なら何もしない
 *  - transform / opacity / clip-path しか触らないのでレイアウトは動かない
 * 1画面目(TOPのヒーロー・下層の h1)の動きは layout.tsx の script が付ける html[data-tl] と CSS で行う。
 */
export default function ScrollReveal() {
  // ハイドレーションで <html> の属性が消えた場合だけ、描画前に戻す(転職ラボで React #418 による消失があったため)
  useLayoutEffect(() => {
    const w = window as unknown as { __tlT0?: number; __tlMode?: string };
    if (!w.__tlMode || typeof w.__tlT0 !== "number") return;
    const d = document.documentElement;
    if (d.hasAttribute("data-tl")) return;
    d.setAttribute("data-tl", w.__tlMode);
    const elapsed = Math.max(0, (performance.now() - w.__tlT0) / 1000);
    d.style.setProperty("--tl-shift", `${elapsed.toFixed(3)}s`);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const main = document.querySelector("main");
    if (!main) return;
    const vh = window.innerHeight;
    const below = (el: Element) => el.getBoundingClientRect().top >= vh * 0.92;

    // 1要素が両方の属性を持つことがある。片方だけ 'in' にすると、もう片方の opacity:0 が残って永久に透明になる
    const reveal = (el: Element) => {
      if (el.hasAttribute("data-rv-item")) el.setAttribute("data-rv-item", "in");
      if (el.hasAttribute("data-rv")) el.setAttribute("data-rv", "in");
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          reveal(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0 }
    );

    // 並んでいるもの(カードの格子・表の行)は少しずつ遅らせる
    const groups: Element[][] = [];
    main.querySelectorAll(".grid").forEach((g) => {
      const kids = Array.from(g.children).filter((c) => (c as HTMLElement).offsetHeight > 24);
      if (kids.length >= 2 && kids.length <= 24) groups.push(kids);
    });
    main.querySelectorAll("tbody").forEach((tb) => {
      const rows = Array.from(tb.querySelectorAll("tr"));
      if (rows.length >= 2 && rows.length <= 24) groups.push(rows);
    });
    const staggered = new Set<Element>();
    for (const g of groups) {
      g.forEach((el, i) => {
        const h = el as HTMLElement;
        if (h.hasAttribute("data-rv-item") || h.closest("[data-rv-item]")) return;
        if (!below(h)) return; // 1画面目はそのまま
        h.setAttribute("data-rv-item", "");
        h.style.setProperty("--rv-delay", `${Math.min(i, 8) * 60}ms`);
        staggered.add(h);
        io.observe(h);
      });
    }

    // ブロック単位(見出し・表・FAQ・2画面目以降の画像)
    const blocks: Element[] = [];
    main.querySelectorAll("h2, h3, table, details, figure, img").forEach((el) => blocks.push(el));
    for (const el of blocks) {
      if (staggered.has(el) || el.closest("[data-rv-item]")) continue;
      if (el.hasAttribute("data-rv")) continue;
      if (el.tagName === "IMG" && el.parentElement?.closest("figure, [data-rv]")) continue; // 包んでいる figure 側で動かす
      if (!below(el)) continue;
      el.setAttribute("data-rv", "");
      io.observe(el);
    }

    // 監視の取りこぼしに依存しない掃き出し。これが安全装置の本体
    let queued = false;
    const sweep = () => {
      queued = false;
      const left = document.querySelectorAll('[data-rv=""],[data-rv-item=""]');
      if (!left.length) return;
      const h = window.innerHeight;
      left.forEach((el) => {
        if (el.getBoundingClientRect().top < h) reveal(el);
      });
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const failsafe = window.setTimeout(sweep, 1200);
    sweep();

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
