export default function AuthorBox() {
  return (
    <div className="border border-gray-200 bg-[#FAFAF8] rounded-lg p-6 mt-10">
      <p className="text-xs font-medium text-[#8B7355] tracking-wider mb-4">
        この記事の監修者
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-16 h-16 rounded-full bg-[#8B7355]/10 border-2 border-[#8B7355] flex items-center justify-center text-[#8B7355] text-xl font-bold shrink-0">
          鈴
        </div>
        <div className="flex-1">
          <p className="text-[#2C2C2C] font-bold text-base mb-1">
            鈴木 真理子
            <span className="text-xs font-normal text-[#2C2C2C]/50 ml-2">（すずき まりこ）</span>
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#8B7355] text-[#8B7355]">
              婚活アドバイザー資格保持
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#8B7355] text-[#8B7355]">
              結婚相談所カウンセラー歴6年
            </span>
          </div>
          <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
            大手結婚相談所でカウンセラーとして6年間勤務し、300組以上の成婚をサポート。利用者目線で最適な結婚相談所選びをお手伝いします。
          </p>
        </div>
      </div>
    </div>
  );
}
