/*
 * 提携相談所レビューの「競合上位記事との差分」ブロック（2026-10-14 新設）。
 *
 * 「サービス名 口コミ／評判」の上位記事（駅探PICKS・みんなの結婚相談所 等）と比べて、
 * このサイトに無かったものを足す:
 *  - 口コミ媒体ごとの評価・件数・内訳（ページ本体で確認できた数字だけ。確認日つき）
 *  - 向いている人・向いていない人
 *  - 入会条件・必要書類・解約のルール（公式FAQ・料金ページの記載）
 *  - 上位記事に残っている古い情報と、公式の現在値の対照
 *
 * 架空の口コミ・自作の点数は書かない。第三者サイトの数字は、そのページ本体で確認できたものだけ。
 */

type Rating = { media: string; score: string; count: string; detail?: string; url: string };
type Outdated = { seen: string; source: string; now: string };

type Props = {
  name: string;
  checkedOn: string;
  ratings?: Rating[];
  ratingNotes?: string[];
  fitYes?: string[];
  fitNo?: string[];
  entry?: string[][];
  entrySource?: string;
  facts?: string[];
  factsTitle?: string;
  outdated?: Outdated[];
};

const H2 = "text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest";

export default function ReviewExtra(p: Props) {
  return (
    <>
      {p.ratings && p.ratings.length > 0 && (
        <section className="mb-12">
          <h2 className={H2}>{p.name}の口コミ評価を媒体別に比較（件数・内訳つき）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            口コミの点数は媒体ごとに集め方が違うため、1つの数字だけで判断しないことが大切です。各媒体のページ本体で確認できた数字だけを載せています（{p.checkedOn}確認）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-3 py-2 text-left font-medium whitespace-nowrap">媒体</th>
                  <th className="px-3 py-2 text-left font-medium whitespace-nowrap">評価</th>
                  <th className="px-3 py-2 text-left font-medium whitespace-nowrap">件数・回答数</th>
                  <th className="px-3 py-2 text-left font-medium">内訳・補足</th>
                </tr>
              </thead>
              <tbody>
                {p.ratings.map((r) => (
                  <tr key={r.media} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-medium text-[#2C2C2C]/80">
                      <a href={r.url} target="_blank" rel="nofollow noopener noreferrer" className="underline">{r.media}</a>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.score}</td>
                    <td className="px-3 py-2">{r.count}</td>
                    <td className="px-3 py-2 text-[#2C2C2C]/75">{r.detail ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {p.ratingNotes && (
            <ul className="mt-3 space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
              {p.ratingNotes.map((n) => (<li key={n}>※{n}</li>))}
            </ul>
          )}
        </section>
      )}

      {(p.fitYes?.length || p.fitNo?.length) ? (
        <section className="mb-12">
          <h2 className={H2}>{p.name}が向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FAFAF8] border border-gray-100 rounded-xl p-6">
              <h3 className="font-medium mb-3 tracking-wider text-[#A08447]">向いている人</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/75">
                {(p.fitYes ?? []).map((t) => (<li key={t} className="flex gap-2"><span className="text-[#A08447] shrink-0">○</span>{t}</li>))}
              </ul>
            </div>
            <div className="bg-[#FAFAF8] border border-gray-100 rounded-xl p-6">
              <h3 className="font-medium mb-3 tracking-wider text-[#2C2C2C]/70">向いていない人</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/75">
                {(p.fitNo ?? []).map((t) => (<li key={t} className="flex gap-2"><span className="text-[#2C2C2C]/40 shrink-0">×</span>{t}</li>))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3">料金・サービス内容・口コミの傾向から当サイトが整理したものです。</p>
        </section>
      ) : null}

      {p.entry && p.entry.length > 0 && (
        <section className="mb-12">
          <h2 className={H2}>{p.name}の入会条件・必要書類・解約のルール</h2>
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
            {p.entry.map(([k, v]) => (
              <div key={k} className="flex flex-col sm:flex-row px-6 py-3 text-sm gap-1">
                <span className="sm:w-32 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C] leading-relaxed">{v}</span>
              </div>
            ))}
          </div>
          {p.entrySource && <p className="text-xs text-[#2C2C2C]/50 mt-3">出典: {p.entrySource}（{p.checkedOn}確認）</p>}
        </section>
      )}

      {p.facts && p.facts.length > 0 && (
        <section className="mb-12">
          <h2 className={H2}>{p.factsTitle ?? `${p.name}の公式サイトで確認できた実績・制度`}</h2>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80 leading-relaxed list-disc pl-5">
            {p.facts.map((f) => (<li key={f}>{f}</li>))}
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-3">いずれも運営側の公表情報です（{p.checkedOn}確認）。</p>
        </section>
      )}

      {p.outdated && p.outdated.length > 0 && (
        <section className="mb-12">
          <h2 className={H2}>ネットの記事でよく見る{p.name}の古い情報と、公式の現在値</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「{p.name} 口コミ」「評判」で上位に表示される記事には、更新が止まったまま古い料金・制度が残っているものがあります。主なものを公式サイトの現在の記載と並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-3 py-2 text-left font-medium">記事でよく見る記載</th>
                  <th className="px-3 py-2 text-left font-medium">公式の現在の記載（{p.checkedOn}）</th>
                </tr>
              </thead>
              <tbody>
                {p.outdated.map((o) => (
                  <tr key={o.seen} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 text-[#2C2C2C]/75">{o.seen}<span className="block text-xs text-[#2C2C2C]/45">例: {o.source}</span></td>
                    <td className="px-3 py-2">{o.now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}
