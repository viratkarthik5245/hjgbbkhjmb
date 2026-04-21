import { ArrowRight, Calendar, Users, Award } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { DATES, STATS } from '../lib/data';

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
        <span className="text-xl md:text-2xl font-bold text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[9px] md:text-[10px] text-white/50 font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function CountdownCard({ countdown, label }: { countdown: { days: number; hours: number; minutes: number; seconds: number }; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full">
      <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em]">{label}</p>
      <div className="flex items-center gap-2">
        <CountdownUnit value={countdown.days} label="Days" />
        <span className="text-xl text-white/25 font-light mb-5">:</span>
        <CountdownUnit value={countdown.hours} label="Hrs" />
        <span className="text-xl text-white/25 font-light mb-5">:</span>
        <CountdownUnit value={countdown.minutes} label="Min" />
        <span className="text-xl text-white/25 font-light mb-5">:</span>
        <CountdownUnit value={countdown.seconds} label="Sec" />
      </div>
    </div>
  );
}

export default function Hero({ onRegisterClick }: { onRegisterClick: () => void }) {
  const courseCountdown = useCountdown(DATES.courseStart);
  const tcsCountdown = useCountdown(DATES.tcsRegistrationClose);

  const statIcons = [Calendar, Users, Award];

  return (
    <section
      id="register"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-950 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(51,145,255,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.08),_transparent_60%)]" />

      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(51,145,255,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.4), transparent)' }}
      />

      <div className="relative container-max section-padding pt-28 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            TCS NQT Recruitment Prep · By Codera
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-slide-up">
            Crack TCS NQT 2026{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              with Confidence
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up animate-delay-100">
            A 6-week comprehensive crash course with live sessions, mock tests,
            and interview coaching — crafted by Codera to help you crack the
            TCS National Qualifier Test and land your first job.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animate-delay-200">
            <button onClick={onRegisterClick} className="btn-primary !text-base md:!text-lg gap-2 animate-pulse-glow w-full sm:w-auto">
              Register for Crash Course
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#overview" className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20 w-full sm:w-auto">
              View TCS NQT Exam Pattern
              <span className="ml-1">&rarr;</span>
            </a>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <CountdownCard countdown={courseCountdown} label="Course Starts In" />
              <CountdownCard countdown={tcsCountdown} label="TCS Registration Closes In" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up animate-delay-300">
            {STATS.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <Icon className="w-5 h-5 text-brand-400" />
                  <p className="text-lg sm:text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
