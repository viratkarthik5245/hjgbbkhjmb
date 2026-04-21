import { Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { MENTORS } from '../lib/data';

export default function Mentors() {
  const { ref, isInView } = useInView();

  return (
    <section id="mentors" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Expert Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Learn from the Best
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from experienced mentors who know the TCS NQT inside out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {MENTORS.map((mentor, i) => (
            <div
              key={mentor.name}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm card-hover transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{mentor.title}</h3>
                <p className="text-sm text-gray-500">{mentor.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
