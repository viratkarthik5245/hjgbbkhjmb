import { Target, Zap, Trophy } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { TRACKS } from '../lib/data';

const TRACK_ICONS = [Target, Zap, Trophy];

export default function Tracks() {
  const { ref, isInView } = useInView();

  return (
    <section id="tracks" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            Placement Tracks
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Choose Your Track
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Performance on NQT determines your track, not CGPA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TRACKS.map((track, i) => {
            const Icon = TRACK_ICONS[i];
            return (
              <div
                key={track.name}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${track.bgGradient} border ${track.borderColor} transition-all duration-700 card-hover ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${track.badgeColor}`}>
                    <Icon className="w-4 h-4" />
                    {track.name}
                  </div>
                  <span className="text-2xl font-extrabold text-gray-900">{track.salary}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Sections Covered
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{track.sections}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Target Audience
                    </p>
                    <p className="text-sm font-medium text-gray-800">{track.target}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
