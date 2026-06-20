import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Upload, X, Image as ImageIcon, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../../shared/components/ui/Button';
import { cn } from '../../../shared/lib/cn';

/* ─── Custom Dark-mode friendly Dropdown ─── */
function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  // Close on click outside
  const handleBlur = (e: React.FocusEvent) => {
    if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
  };

  return (
    <div ref={ref} className="relative" onBlur={handleBlur}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          'w-full flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-left transition-colors focus:outline-none focus:border-primary/50',
          selected ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'
        )}
      >
        <span className="truncate">{selected?.label || placeholder}</span>
        <ChevronDown className={cn('w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1.5 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl max-h-48 overflow-auto py-1"
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  className={cn(
                    'w-full flex items-center justify-between px-3.5 py-2.5 text-sm transition-colors',
                    opt.value === value
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  )}
                >
                  <span>{opt.label}</span>
                  {opt.value === value && <Check className="w-3.5 h-3.5" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const SERVICE_TYPES = [
  { value: 'visual', label: 'Marketing Visuel Premium' },
  { value: 'web-dev', label: 'Développement Web' },
  { value: 'mobile-app', label: 'Application Mobile' },
  { value: 'custom', label: 'Solution Sur-mesure' },
  { value: 'other', label: 'Autre' },
];

const BUDGETS = ['< 25 000 FCFA', '25 000 – 75 000 FCFA', '75 000 – 200 000 FCFA', '200 000+', 'Sur devis'];

interface ImagePreview {
  file: File;
  url: string;
  name: string;
}

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', description: '', budget: '' });
  const [images, setImages] = useState<ImagePreview[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const valid = Array.from(files).filter((f) => f.type.startsWith('image/')).slice(0, 6);
    const newImgs = valid.map((f) => ({ file: f, url: URL.createObjectURL(f), name: f.name }));
    setImages((prev) => [...prev, ...newImgs].slice(0, 6));
  };

  const removeImage = (i: number) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[i].url);
      return prev.filter((_, idx) => idx !== i);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-10 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-success" />
        </div>
        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">Message envoyé !</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Notre équipe vous répond dans les 2 prochaines heures.</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => {
              setSent(false);
              setImages([]);
              setForm({ name: '', email: '', phone: '', service: '', description: '', budget: '' });
            }}
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Nouveau message
          </button>
          <span className="text-slate-400">·</span>
          <Link to="/" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    );
  }

  const inputClasses = 'w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary/50 transition-colors';

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 lg:p-9 space-y-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1.5">Nom complet *</label>
          <input type="text" required value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Votre nom" className={inputClasses} />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1.5">Email *</label>
          <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="votre@email.com" className={inputClasses} />
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1.5">Téléphone</label>
          <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+221 70 000 00 00" className={inputClasses} />
        </div>
        <div className="relative">
          <label className="block text-xs text-slate-500 mb-1.5">Service *</label>
          <CustomSelect
            value={form.service}
            onChange={(v) => set('service', v)}
            options={SERVICE_TYPES}
            placeholder="Choisir un service…"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs text-slate-500 mb-1.5">Description *</label>
        <textarea
          required
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          placeholder="Décrivez votre projet, vos produits, vos besoins…"
          rows={3}
          className={cn(inputClasses, 'resize-none')}
        />
      </div>

      {/* Image upload */}
      <div>
        <label className="block text-xs text-slate-500 mb-1.5">
          Photos produits <span className="text-primary">(optionnel · jusqu'à 6)</span>
        </label>
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => images.length < 6 && fileRef.current?.click()}
          className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-5 text-center cursor-pointer transition-all hover:border-primary/50 bg-slate-50 dark:bg-slate-800/30"
        >
          <Upload className="w-5 h-5 text-slate-400 mx-auto mb-2" />
          <p className="text-xs text-slate-500">Glissez vos photos ici ou <span className="text-primary">cliquez pour choisir</span></p>
          <p className="text-[10px] text-slate-400 mt-1">JPG, PNG, HEIC — max 6 photos</p>
          <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
            {images.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group">
                <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); removeImage(i); }}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {images.length < 6 && (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="aspect-square rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-primary/50 hover:text-primary transition-all"
              >
                <ImageIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Budget */}
      <div>
        <label className="block text-xs text-slate-500 mb-2">Budget estimé</label>
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => set('budget', b)}
              className={cn(
                'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all border',
                form.budget === b
                  ? 'bg-primary/10 border-primary/40 text-primary'
                  : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white'
              )}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        isLoading={sending}
        variant="primary"
        size="lg"
        className="w-full"
        leftIcon={!sending ? <Send className="w-4 h-4" /> : undefined}
      >
        {sending ? 'Envoi…' : 'Envoyer ma demande'}
      </Button>
    </form>
  );
}
