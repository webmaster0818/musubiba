// A8アフィリエイトバナー(2026-07-31施主支給・審査通過分5社)。
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
