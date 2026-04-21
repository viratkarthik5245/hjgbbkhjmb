import { Building2, TrendingUp, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { NQT_INFO } from '../lib/data';

const ICONS = [Building2, TrendingUp, Users];

export default function Overview() {
  const { ref, isInView } = useInView();

  return (
    <section id="overview" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            {NQT_INFO.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {NQT_INFO.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {NQT_INFO.highlights.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className={`relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm card-hover transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
