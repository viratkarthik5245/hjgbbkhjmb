import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-brand-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(51,145,255,0.12),_transparent_70%)]" />

      <div className="relative container-max section-padding text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          Completely Free for Codera Students
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Crack TCS NQT 2026?
        </h2>

        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of Codera students already preparing. 37 live sessions,
          mock tests, and interview coaching — all free.
        </p>

        <button onClick={onRegisterClick} className="btn-primary !text-base md:!text-lg gap-2 animate-pulse-glow">
          Register for Crash Course
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
