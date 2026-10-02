"use client";

import { useEffect } from "react";

/*
 * スクロールで要素がふわっと表示される演出(2026-10-02 施主指示・参考: パートナーエージェント)。
 * 参考サイトは data-anime + fadeUp クラスを、ビューポートに入った要素に付ける方式だった。
 * ここでは IntersectionObserver で同等のことを行う。
 *
 * 重要な設計:
 *  - 初期状態(非表示)を付けるのは JS。CSS 側で最初から隠さない。
 *    こうしておけば JS が動かない環境でも本文は必ず見える(SEO・アクセシビリティの安全策)。
 *  - prefers-reduced-motion: reduce の利用者には一切適用しない。
 *  - 一度表示したら監視を外す(戻るときに再アニメーションさせない)。
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    // 対象は main 直下のブロックと、カード/表/画像のまとまり。
    // h1 とファーストビューは動かさない(読み込み直後に隠れていると不自然なため)。
    const sel = "main section, main > div, main article, main table, main img";
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(sel));

    const targets = nodes.filter((el) => {
      if (el.closest("header, footer, nav")) return false;
      if (el.querySelector("h1")) return false;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) return false; // 初期表示域はそのまま
      if (r.height < 40) return false;
      // 入れ子で二重にかけない
      return !el.parentElement?.closest("[data-rv]");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).setAttribute("data-rv", "in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    for (const el of targets) {
      el.setAttribute("data-rv", "");
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return null;
}
