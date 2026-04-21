import { useState } from 'react';
import { BookOpen, ChevronDown, PlayCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SYLLABUS_WEEKS } from '../lib/data';

export default function Syllabus() {
  const { ref, isInView } = useInView();
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <section id="syllabus" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            6-Week Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Week-by-Week Syllabus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            37 Live Sessions + 4 Advanced Sessions covering everything you need
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {SYLLABUS_WEEKS.map((week, i) => {
            const isOpen = openWeek === week.week;
            return (
              <div
                key={week.week}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-700 ${
                  isOpen ? 'border-brand-200 shadow-md' : 'border-gray-200 hover:border-gray-300'
                } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenWeek(isOpen ? null : week.week)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                      isOpen ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600'
                    } transition-colors`}>
                      W{week.week}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{week.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5">
                        <PlayCircle className="w-3.5 h-3.5" />
                        {week.sessions} Sessions
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {week.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-50 border border-brand-100">
            <span className="text-sm font-bold text-brand-700">33 Core Sessions</span>
            <span className="w-1 h-1 rounded-full bg-brand-300" />
            <span className="text-sm font-bold text-brand-700">+4 Advanced Sessions</span>
            <span className="w-1 h-1 rounded-full bg-brand-300" />
            <span className="text-sm font-bold text-brand-700">74 Hours Total</span>
          </div>
        </div>
      </div>
    </section>
  );
}
