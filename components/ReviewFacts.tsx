/*
 * 提携相談所レビューの「公式確認値＋口コミの出典」ブロック（2026-10-14 新設）。
 *
 * 目的: 「サービス名 口コミ／評判」の上位記事に対して、このサイトに無かったもの
 * （公式で確認した料金表と確認日・運営会社・1年総額の計算式・口コミの出典媒体）を足す。
 *
 * 方針:
 *  - 料金・会員数などは確認日つきで公式サイトの掲載値だけを書く。
 *  - 口コミは本文を転載せず、どの媒体にどんな傾向の声があるかだけを要約する。
 *    架空の口コミ・自作の点数は書かない。
 *  - 公式URLは文字で示すだけ（リンクは各ページの提携導線のみ）。出典媒体へのリンクは nofollow。
 */

type Source = { name: string; url: string; note?: string };

type Props = {
  name: string;
  checkedOn: string;
  officialUrl: string;
  feeHead: string[];
  feeRows: string[][];
  feeNotes?: string[];
  estimate?: { label: string; formula: string; total: string }[];
  company: [string, string][];
  good?: { text: string; source: string }[];
  bad?: { text: string; source: string }[];
  /** 口コミ媒体での掲載状況・Googleマップ実測など、傾向の前提になる事実 */
  reviewNote?: string;
  sources: Source[];
  caution?: string[];
};

export default function ReviewFacts(p: Props) {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
          {p.name}の料金（{p.checkedOn}に公式サイトで確認）
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-100">
            <thead>
              <tr className="bg-[#F5F0EB]">
                {p.feeHead.map((h) => (
                  <th key={h} className="px-3 py-2 text-left font-medium text-[#2C2C2C] whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {p.feeRows.map((r, i) => (
                <tr key={i} className="border-t border-gray-100">
                  {r.map((c, j) => (
                    <td key={j} className={`px-3 py-2 ${j === 0 ? "font-medium text-[#2C2C2C]/80" : ""}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {p.feeNotes && (
          <ul className="mt-3 space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            {p.feeNotes.map((n) => (<li key={n}>※{n}</li>))}
          </ul>
        )}
        {p.estimate && p.estimate.length > 0 && (
          <div className="mt-6 bg-[#FAFAF8] rounded-xl border border-gray-100 p-5">
            <h3 className="font-medium mb-3 tracking-wider text-[#2C2C2C]">1年活動して成婚退会した場合の総額（単純計算）</h3>
            <ul className="space-y-2 text-sm">
              {p.estimate.map((e) => (
                <li key={e.label}>
                  <span className="font-medium">{e.label}</span>：{e.formula} ＝ <strong className="text-[#A08447]">{e.total}</strong>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#2C2C2C]/50 mt-3">お見合い料・オプション・キャンペーン割引は含めていません。実際の総額は、活動期間とお見合い件数によって変わります。</p>
          </div>
        )}
      </section>

      <ReviewVoices name={p.name} checkedOn={p.checkedOn} reviewNote={p.reviewNote} good={p.good} bad={p.bad} caution={p.caution} />

      <section className="mb-12">
        <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">{p.name}の運営会社</h2>
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
          {p.company.map(([k, v]) => (
            <div key={k} className="flex px-6 py-3 text-sm">
              <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
              <span className="text-[#2C2C2C]">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-light mb-4 tracking-widest">出典・確認日</h2>
        <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
          {/* 公式は計測リンク経由の導線が別にあるため、ここではURLを文字で示すだけにする */}
          <li>公式サイト：{p.officialUrl}（{p.checkedOn}確認）</li>
          {p.sources.map((s) => (
            <li key={s.url}>{s.name}：<a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="underline">{s.url}</a>{s.note ? `（${s.note}）` : ""}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

type Voice = { text: string; source: string };

/** 口コミの掲載状況と傾向（出典つき）。料金表を別に持つページでも単体で使う。 */
export function ReviewVoices(p: {
  name: string;
  checkedOn: string;
  reviewNote?: string;
  good?: Voice[];
  bad?: Voice[];
  caution?: string[];
  sources?: Source[];
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
        {p.name}の良い口コミ・悪い口コミ（掲載媒体を明記）
      </h2>
      <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
        口コミサイトや調査に掲載されている声を、本文を転載せず、媒体ごとの傾向として整理しています（{p.checkedOn}確認）。個別の体験談は、各媒体で原文をご確認ください。
      </p>
      {p.reviewNote && <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4 bg-[#FAFAF8] border border-gray-100 rounded-xl p-4">{p.reviewNote}</p>}
      {(p.good?.length || p.bad?.length) ? (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50/50 rounded-xl p-6">
          <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い口コミの傾向</h3>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/75">
            {(p.good ?? []).map((g) => (
              <li key={g.text} className="flex gap-2"><span className="text-green-500 shrink-0">+</span><span>{g.text}<span className="block text-xs text-[#2C2C2C]/45">出典：{g.source}</span></span></li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50/50 rounded-xl p-6">
          <h3 className="font-medium text-red-800 mb-4 tracking-wider">悪い口コミ・気になる声の傾向</h3>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/75">
            {(p.bad ?? []).map((g) => (
              <li key={g.text} className="flex gap-2"><span className="text-red-400 shrink-0">-</span><span>{g.text}<span className="block text-xs text-[#2C2C2C]/45">出典：{g.source}</span></span></li>
            ))}
          </ul>
        </div>
      </div>
      ) : null}
      {p.caution && (
        <ul className="mt-4 space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
          {p.caution.map((c) => (<li key={c}>※{c}</li>))}
        </ul>
      )}
      {p.sources && p.sources.length > 0 && (
        <ul className="mt-4 space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
          {p.sources.map((s) => (
            <li key={s.url}>出典：{s.name} <a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="underline">{s.url}</a>{s.note ? `（${s.note}）` : ""}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
