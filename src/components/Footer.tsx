import { Code2, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-max section-padding py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold text-white">Codera</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-400">
                  NQT Prep Hub
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Empowering students to land their dream tech jobs through structured, expert-led preparation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors">Exam Overview</a></li>
              <li><a href="#tracks" className="text-gray-400 hover:text-white transition-colors">Placement Tracks</a></li>
              <li><a href="#syllabus" className="text-gray-400 hover:text-white transition-colors">Syllabus</a></li>
              <li><a href="#mentors" className="text-gray-400 hover:text-white transition-colors">Mentors</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                support@codera.io
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Globe className="w-4 h-4" />
                codera.io
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left max-w-2xl leading-relaxed">
            TCS NQT is a public hiring exam conducted independently by Tata
            Consultancy Services. Codera is not affiliated with TCS — we are an
            independent preparation platform for our students.
          </p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Codera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
