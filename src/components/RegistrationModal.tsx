import { useState, useEffect, FormEvent } from 'react';
import { X, CheckCircle2, Loader2, User, Mail, Phone, GraduationCap, BookOpenCheck, Target } from 'lucide-react';
import { supabase, RegistrationInput } from '../lib/supabase';

interface Props {
  open: boolean;
  onClose: () => void;
}

const INITIAL_FORM: RegistrationInput = {
  full_name: '',
  email: '',
  phone: '',
  college: '',
  graduation_year: '2026',
  preferred_track: 'Ninja',
};

export default function RegistrationModal({ open, onClose }: Props) {
  const [form, setForm] = useState<RegistrationInput>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const reset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    setError(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.full_name.trim() || !form.email.trim() || !form.phone.trim() || !form.college.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!/^\d{10,15}$/.test(form.phone.replace(/\D/g, ''))) {
      setError('Please enter a valid phone number.');
      return;
    }

    setSubmitting(true);

    const { error: dbError } = await supabase.from('registrations').insert([form]);

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9 text-green-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
              You're Registered!
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Thanks for registering with Codera. We'll send a confirmation to{' '}
              <span className="font-semibold text-gray-900">{form.email}</span> shortly with joining details.
            </p>
            <button onClick={handleClose} className="btn-primary w-full">
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
                Free Enrollment
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                Register for the Crash Course
              </h3>
              <p className="text-sm text-gray-500">
                Secure your seat — takes less than 60 seconds.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <Field
                icon={<User className="w-4 h-4" />}
                label="Full Name"
                required
                type="text"
                value={form.full_name}
                placeholder="Enter your full name"
                onChange={(v) => setForm({ ...form, full_name: v })}
              />

              <Field
                icon={<Mail className="w-4 h-4" />}
                label="Email Address"
                required
                type="email"
                value={form.email}
                placeholder="you@example.com"
                onChange={(v) => setForm({ ...form, email: v })}
              />

              <Field
                icon={<Phone className="w-4 h-4" />}
                label="Phone Number"
                required
                type="tel"
                value={form.phone}
                placeholder="10-digit mobile number"
                onChange={(v) => setForm({ ...form, phone: v })}
              />

              <Field
                icon={<BookOpenCheck className="w-4 h-4" />}
                label="College / University"
                required
                type="text"
                value={form.college}
                placeholder="e.g., Anna University"
                onChange={(v) => setForm({ ...form, college: v })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectField
                  icon={<GraduationCap className="w-4 h-4" />}
                  label="Graduation Year"
                  value={form.graduation_year}
                  options={['2024', '2025', '2026']}
                  onChange={(v) => setForm({ ...form, graduation_year: v })}
                />

                <SelectField
                  icon={<Target className="w-4 h-4" />}
                  label="Preferred Track"
                  value={form.preferred_track}
                  options={['Ninja', 'Digital', 'Prime']}
                  onChange={(v) => setForm({ ...form, preferred_track: v })}
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-error-50 border border-error-200 text-sm text-error-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full !text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Complete Registration'
                )}
              </button>

              <p className="text-xs text-gray-400 text-center leading-relaxed">
                By registering, you agree to receive class updates via email & WhatsApp.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

interface FieldProps {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}

function Field({ icon, label, required, type, value, placeholder, onChange }: FieldProps) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1.5">
        <span className="text-gray-400">{icon}</span>
        {label} {required && <span className="text-error-500">*</span>}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:bg-white transition-all"
      />
    </label>
  );
}

interface SelectFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}

function SelectField({ icon, label, value, options, onChange }: SelectFieldProps) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1.5">
        <span className="text-gray-400">{icon}</span>
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:bg-white transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:20px] bg-[right_0.5rem_center] pr-10"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
