import { CalendarDays, CheckCircle2, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { TIMELINE_EVENTS } from '../lib/data';

export default function Timeline() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            <CalendarDays className="w-4 h-4" />
            Important Dates
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Key Dates & Milestones
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400 via-brand-300 to-gray-200" />

            <div className="space-y-8">
              {TIMELINE_EVENTS.map((event, i) => (
                <div
                  key={event.title}
                  className={`relative pl-16 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div
                    className={`absolute left-3.5 top-1 w-5 h-5 rounded-full border-[3px] ${
                      event.status === 'active'
                        ? 'bg-brand-500 border-brand-200 shadow-md shadow-brand-500/30'
                        : 'bg-white border-gray-300'
                    }`}
                  />

                  <div className={`p-6 rounded-2xl border transition-all ${
                    event.status === 'active'
                      ? 'bg-brand-50 border-brand-200 shadow-sm'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {event.status === 'active' ? (
                        <CheckCircle2 className="w-4 h-4 text-brand-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-sm font-semibold ${
                        event.status === 'active' ? 'text-brand-600' : 'text-gray-500'
                      }`}>
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
