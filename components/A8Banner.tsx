// アフィリエイトバナー(施主支給・審査通過分)。A8(2026-07-31)+felmat(2026-08-03: sunmarie/partner-agent/ibj-members)。
// AFF_*は支給コードのバイト厳密一致(改変禁止)。文言・計測タグ(1x1 img)を変更しないこと。
// 表示は広告(PR)表記つきの枠で包む。装飾はラッパー側のみ。

const ADS: Record<string, { label: string; html: string }> = {
  hero: {
    label: "ヒーローマリッジ",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+G69YEQ+4HMW+NTZCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260731177978&wid=001&eno=01&mid=s00000020948004003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4B8DGP+G69YEQ+4HMW+NTZCH" alt="">`,
  },
  tulip: {
    label: "ブライダルチューリップ",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+G82982+32P0+626XT" rel="nofollow">
<img border="0" width="336" height="280" alt="" src="https://www27.a8.net/svt/bgt?aid=260731177981&wid=001&eno=01&mid=s00000014346001018000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B8DGP+G82982+32P0+626XT" alt="">`,
  },
  wellsma: {
    label: "ウェルスマ",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+FYJWDM+5BUE+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260731177965&wid=028&eno=01&mid=s00000024863001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B8DGP+FYJWDM+5BUE+5Z6WX" alt="">`,
  },
  nacodo: {
    label: "naco-do（ナコード）",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+G994FM+4HHW+63OY9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260731177983&wid=001&eno=01&mid=s00000020930001025000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B8DGP+G994FM+4HHW+63OY9" alt="">`,
  },
  excellence: {
    label: "エクセレンス青山",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+GCTQ2A+VO0+C465T" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=260731177989&wid=001&eno=01&mid=s00000004104002035000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4B8DGP+GCTQ2A+VO0+C465T" alt="">`,
  },
  sunmarie: {
    label: "サンマリエ",
    html: `<a href="https://t.felmat.net/fmcl?ak=N4707F.1.T84894Q.Z1361712" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/N4707F.T84894Q.Z1361712" width="300" height="250" alt="" border="0" /></a>`,
  },
  "partner-agent": {
    label: "パートナーエージェント",
    html: `<a href="https://t.felmat.net/fmcl?ak=L20406.1.R50563Q.Z1361712" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/L20406.R50563Q.Z1361712" width="300" height="250" alt="" border="0" /></a>`,
  },
  "ibj-members": {
    label: "IBJメンバーズ",
    html: `<a href="https://t.felmat.net/fmcl?ak=T4375L.1.T84236V.Z1361712" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/T4375L.T84236V.Z1361712" width="300" height="250" alt="" border="0" /></a>`,
  },
  "tulip-men": {
    label: "ブライダルチューリップ（男性向け）",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+GB1F8Y+32P0+HWAG1" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=260731177986&wid=001&eno=01&mid=s00000014346003006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4B8DGP+GB1F8Y+32P0+HWAG1" alt="">`,
  },
  folli: {
    label: "フォリパートナー",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+GDFQI2+4NUS+5ZMCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260731177990&wid=028&eno=01&mid=s00000021754001006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4B8DGP+GDFQI2+4NUS+5ZMCH" alt="">`,
  },
  pitto: {
    label: "P!っと縁結び",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+GAFZN6+5UBE+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260731177985&wid=001&eno=01&mid=s00000027257001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B8DGP+GAFZN6+5UBE+5YZ75" alt="">`,
  },
  bellroad: {
    label: "ベルロード縁結びサポート",
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4B8DGP+G7GTMA+4MPE+61C2P" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260731177980&wid=001&eno=01&mid=s00000021605001014000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B8DGP+G7GTMA+4MPE+61C2P" alt="">`,
  },
};

export default function A8Banner({ ad }: { ad: keyof typeof ADS | string }) {
  const item = ADS[ad as string];
  if (!item) return null;
  return (
    <div className="my-8 text-center">
      <p className="text-[10px] tracking-widest text-gray-400 mb-2">PR（{item.label}・提携広告）</p>
      <div className="inline-block [&_img]:max-w-full [&_img]:h-auto" dangerouslySetInnerHTML={{ __html: item.html }} />
    </div>
  );
}
