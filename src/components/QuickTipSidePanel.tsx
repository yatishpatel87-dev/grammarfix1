import React, { useState } from 'react';
import {
  Lightbulb,
  X,
  ChevronRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
  Layers,
  HelpCircle,
  Languages,
} from 'lucide-react';
import { GrammarCategory, GrammarQuestion } from '../types';
import { GRAMMAR_QUICK_TIPS, QuickTipData } from '../data/quickTipsData';

interface QuickTipSidePanelProps {
  question: GrammarQuestion;
  isOpen: boolean;
  onClose: () => void;
  isDesktopPinned?: boolean;
}

export const QuickTipSidePanel: React.FC<QuickTipSidePanelProps> = ({
  question,
  isOpen,
  onClose,
  isDesktopPinned = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GrammarCategory>(question.category);
  const [lang, setLang] = useState<'both' | 'gu' | 'en'>('both');

  // Keep selected category synced with the active challenge unless user manually browses
  React.useEffect(() => {
    setSelectedCategory(question.category);
  }, [question.id, question.category]);

  const tipData: QuickTipData =
    GRAMMAR_QUICK_TIPS[selectedCategory] || GRAMMAR_QUICK_TIPS['subject-verb'];

  if (!isOpen && !isDesktopPinned) {
    return null;
  }

  const allCategories: { id: GrammarCategory; label: string; icon: string }[] = [
    { id: 'subject-verb', label: 'Subject-Verb', icon: '⚖️' },
    { id: 'tenses', label: 'Tenses / Past', icon: '⏳' },
    { id: 'articles', label: 'A / An / The', icon: '🅰️' },
    { id: 'prepositions', label: 'Prepositions', icon: '📍' },
    { id: 'plurals', label: 'Plurals', icon: '👥' },
    { id: 'pronouns', label: 'Pronouns', icon: '👤' },
    { id: 'adjectives-adverbs', label: 'Adj vs Adv', icon: '✨' },
    { id: 'conditionals', label: 'Conditionals', icon: '🔮' },
    { id: 'homophones', label: 'Homophones', icon: '👂' },
    { id: 'capitalization-punctuation', label: 'Punctuation', icon: '✍️' },
  ];

  return (
    <>
      {/* Mobile Backdrop when opened as overlay */}
      {!isDesktopPinned && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Side Panel Container */}
      <aside
        aria-label="Grammar Quick Tip Panel"
        className={`
          fixed lg:static top-0 right-0 bottom-0 z-50
          w-full sm:w-96 lg:w-84 xl:w-96
          bg-white border-l border-slate-200 shadow-2xl lg:shadow-none
          flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          ${isDesktopPinned ? 'lg:flex' : ''}
        `}
      >
        {/* Panel Header */}
        <div className="p-4 bg-gradient-to-r from-amber-500/10 via-amber-100/40 to-yellow-50 border-b border-amber-200/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <Lightbulb className="w-4 h-4 text-slate-950 fill-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black text-slate-900">Grammar Quick Tip</h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-200/70 text-amber-900">
                  Active
                </span>
              </div>
              <p className="text-[11px] text-slate-500">નિયમો અને ઉદાહરણો</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Language switch */}
            <div className="flex items-center bg-white/80 p-0.5 rounded-lg border border-slate-200 text-[10px] font-bold">
              <button
                type="button"
                onClick={() => setLang('both')}
                className={`px-1.5 py-0.5 rounded ${
                  lang === 'both' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Both Languages"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setLang('gu')}
                className={`px-1.5 py-0.5 rounded ${
                  lang === 'gu' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="ગુજરાતી"
              >
                ગુજ
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded ${
                  lang === 'en' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="English"
              >
                En
              </button>
            </div>

            {/* Close button on mobile/overlay */}
            <button
              id="close-quick-tip-panel-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/60 transition"
              title="Close Quick Tip"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories Quick Bar */}
        <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
          {allCategories.map((cat) => {
            const isCurrent = cat.id === question.category;
            const isSelected = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs whitespace-nowrap font-bold transition shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : isCurrent
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" title="This Challenge" />
                )}
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-800">
          {/* Active Category Heading */}
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${tipData.badgeColor}`}>
                {tipData.titleEn}
              </span>
              {selectedCategory === question.category && (
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Current Question
                </span>
              )}
            </div>
            <h4 className="text-base font-black text-slate-900 mt-1">
              {tipData.titleEn}
            </h4>
            {(lang === 'both' || lang === 'gu') && (
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                {tipData.titleGu}
              </p>
            )}
          </div>

          {/* Golden Rule Callout */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300/70 shadow-xs">
            <div className="flex items-center gap-1.5 text-amber-900 font-black text-xs uppercase tracking-wide mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Golden Rule / સુવર્ણ નિયમ:</span>
            </div>
            {(lang === 'both' || lang === 'en') && (
              <p className="text-xs font-bold text-amber-950 leading-relaxed">
                {tipData.goldenRule}
              </p>
            )}
            {(lang === 'both' || lang === 'gu') && (
              <p className="text-xs font-semibold text-amber-900 mt-1.5 pt-1.5 border-t border-amber-200 leading-relaxed">
                {tipData.goldenRuleGu}
              </p>
            )}
          </div>

          {/* Visual Formula / Pattern Box */}
          {tipData.formula && (
            <div className="p-3 rounded-xl bg-slate-900 text-amber-300 font-mono text-xs border border-slate-800 shadow-inner">
              <div className="text-[10px] uppercase font-sans font-bold text-slate-400 mb-1">
                Rule Formula / માળખું:
              </div>
              <div className="font-bold tracking-tight break-words">
                {tipData.formula}
              </div>
            </div>
          )}

          {/* Common Mistakes vs Right */}
          <div>
            <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-2 flex items-center gap-1.5">
              <span>Common Mistakes & Corrections</span>
            </h5>
            <div className="space-y-2">
              {tipData.commonMistakes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                >
                  <div className="flex items-start gap-1.5 text-rose-700 font-medium">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-500" />
                    <span className="line-through">{item.wrong}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-emerald-800 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                    <span>{item.right}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 pl-5 italic">
                    💡 {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips List */}
          <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-xs">
            <h5 className="font-bold text-blue-900 mb-1.5 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              <span>Exam & Grammar Pro-Tips:</span>
            </h5>
            <ul className="space-y-1 text-slate-700 text-[11px] pl-3 list-disc">
              {tipData.proTips.map((pro, i) => (
                <li key={i} className="leading-snug">
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center shrink-0">
          <p className="text-[11px] text-slate-400">
            Tip automatically syncs with challenge type 💡
          </p>
        </div>
      </aside>
    </>
  );
};
