import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Image as ImageIcon,
  Mail,
  MessageCircle,
  Upload,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../../../shared/constants/company";
import { cn } from "../../../shared/lib/cn";

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

  const handleBlur = (e: React.FocusEvent) => {
    if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
  };

  return (
    <div ref={ref} className="relative" onBlur={handleBlur}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-left cursor-pointer hover:border-primary/40 transition-all duration-300 focus:outline-none focus:border-primary/50",
          selected
            ? "text-slate-900 dark:text-white"
            : "text-slate-400 dark:text-slate-500",
        )}
      >
        <span className="truncate">{selected?.label || placeholder}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1.5 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg max-h-48 overflow-auto py-1"
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3.5 py-2.5 text-sm cursor-pointer transition-colors",
                    opt.value === value
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50",
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
  { value: "visual", label: "Marketing Visuel Premium" },
  { value: "web-dev", label: "Développement Web" },
  { value: "mobile-app", label: "Application Mobile" },
  { value: "custom", label: "Solution Sur-mesure" },
  { value: "other", label: "Autre" },
];

const BUDGETS = [
  "< 25 000 FCFA",
  "25 000 – 75 000 FCFA",
  "75 000 – 200 000 FCFA",
  "200 000 – 500 000 FCFA",
  "500 000 – 1 000 000 FCFA",
  "1 000 000+ FCFA",
  "Sur devis",
];

interface ImagePreview {
  file: File;
  url: string;
  name: string;
}

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    budget: "",
  });
  const [images, setImages] = useState<ImagePreview[]>([]);
  const [sent, setSent] = useState(false);
  const [sentMethod, setSentMethod] = useState<"whatsapp" | "email" | null>(
    null,
  );
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const valid = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, 6);
    const newImgs = valid.map((f) => ({
      file: f,
      url: URL.createObjectURL(f),
      name: f.name,
    }));
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

  const serviceLabel =
    SERVICE_TYPES.find((s) => s.value === form.service)?.label || "Non précisé";

  const buildMessageHeader = () => {
    return "*Contact depuis le site web Solinexia*\n";
  };

  const buildEmailBody = () => {
    const body = `${buildMessageHeader().replace(/\*/g, "")}

Nom: ${form.name}
Email: ${form.email}
Téléphone: ${form.phone || "Non précisé"}
Service: ${serviceLabel}
Budget: ${form.budget || "Non précisé"}

Description du projet:
${form.description}

${images.length > 0 ? `Photos jointes: ${images.length} image(s) — veuillez les attacher manuellement à cet email.\nNoms des fichiers: ${images.map((img) => img.name).join(", ")}` : ""}

---
Ce message a été généré depuis le formulaire de contact du site Solinexia.`;
    return encodeURIComponent(body);
  };

  const buildWhatsAppMessage = () => {
    const msg = `${buildMessageHeader()}
👤 *Nom:* ${form.name}
📧 *Email:* ${form.email}
📱 *Téléphone:* ${form.phone || "Non précisé"}
🛠 *Service:* ${serviceLabel}
💰 *Budget:* ${form.budget || "Non précisé"}

📝 *Description:*
${form.description}

${images.length > 0 ? `🖼 *Photos:* ${images.length} image(s) jointe(s) — veuillez les envoyer dans cette conversation.\nFichiers: ${images.map((img) => img.name).join(", ")}` : ""}`;
    return encodeURIComponent(msg);
  };

  const handleSubmitWhatsApp = () => {
    if (!form.name || !form.email || !form.service || !form.description) return;
    const url = `https://wa.me/${COMPANY.whatsapp}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
    setSentMethod("whatsapp");
    setSent(true);
  };

  const handleSubmitEmail = () => {
    if (!form.name || !form.email || !form.service || !form.description) return;
    const subject = encodeURIComponent(
      `Contact site web — ${form.name} (${serviceLabel})`,
    );
    const body = buildEmailBody();
    const url = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    window.location.href = url;
    setSentMethod("email");
    setSent(true);
  };

  const isFormValid =
    form.name && form.email && form.service && form.description;

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
        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
          {sentMethod === "whatsapp" ? "WhatsApp ouvert !" : "Email préparé !"}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
          {sentMethod === "whatsapp"
            ? "Votre message a été pré-rempli dans WhatsApp. Vérifiez et envoyez."
            : "Votre client mail s'est ouvert avec le message pré-rempli. Vérifiez et envoyez."}
          {images.length > 0 && (
            <span className="block mt-2 text-xs text-primary">
              N'oubliez pas d'attacher vos {images.length} photo(s)
              manuellement.
            </span>
          )}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => {
              setSent(false);
              setSentMethod(null);
              setForm({
                name: "",
                email: "",
                phone: "",
                service: "",
                description: "",
                budget: "",
              });
              setImages([]);
            }}
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.97]"
          >
            Nouveau message
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 bg-gradient-to-r from-primary to-primary/85 hover:from-primary/90 hover:to-primary/70 text-white hover:scale-[1.02] active:scale-[0.97]"
          >
            Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 lg:p-9 space-y-5"
    >
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1.5">
            Nom complet *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Votre nom"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1.5">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="votre@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1.5">
            Téléphone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+221 70 000 00 00"
            className={inputClasses}
          />
        </div>
        <div className="relative">
          <label className="block text-xs text-slate-500 mb-1.5">
            Service *
          </label>
          <CustomSelect
            value={form.service}
            onChange={(v) => set("service", v)}
            options={SERVICE_TYPES}
            placeholder="Choisir un service…"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs text-slate-500 mb-1.5">
          Description *
        </label>
        <textarea
          required
          value={form.description}
          onChange={(e) => {
            set("description", e.target.value);
            const el = e.target;
            el.style.height = "auto";
            el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
          }}
          placeholder="Décrivez votre projet, vos produits, vos besoins…"
          rows={3}
          className={cn(
            inputClasses,
            "resize-none overflow-y-auto scrollbar-hide",
          )}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        />
      </div>

      {/* Image upload */}
      <div>
        <label className="block text-xs text-slate-500 mb-1.5">
          Photos produits{" "}
          <span className="text-primary">(optionnel · jusqu'à 6)</span>
        </label>

        {/* Drag-drop zone — only shown when no images yet */}
        {images.length === 0 && (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-5 text-center cursor-pointer transition-all hover:border-primary/50 bg-slate-50 dark:bg-slate-800/30"
          >
            <Upload className="w-5 h-5 text-slate-400 mx-auto mb-2" />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Glissez vos photos ici ou{" "}
              <span className="text-primary">cliquez pour choisir</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-1">
              JPG, PNG, HEIC — max 6 photos
            </p>
          </div>
        )}

        <input
          ref={fileRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {images.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group"
              >
                <img
                  src={img.url}
                  alt={img.name}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(i);
                  }}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {images.length < 6 && (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="aspect-square rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-primary/50 hover:text-primary transition-all cursor-pointer"
              >
                <ImageIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Budget — horizontal scroll with check icons */}
      <div>
        <label className="block text-xs text-slate-500 mb-2">
          Budget estimé
        </label>
        <div
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => set("budget", b)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all border whitespace-nowrap shrink-0 snap-start cursor-pointer",
                form.budget === b
                  ? "bg-success/10 border-success/40 text-success dark:text-success dark:bg-success/15"
                  : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-success/30",
              )}
            >
              {form.budget === b && <Check className="w-3 h-3" />}
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Submit buttons — WhatsApp + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button
          type="button"
          onClick={handleSubmitWhatsApp}
          disabled={!isFormValid}
          className={cn(
            "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300",
            "bg-[#25D366] hover:bg-[#1da851] text-white dark:bg-[#25D366] dark:hover:bg-[#1da851]",
            "disabled:opacity-40 disabled:pointer-events-none",
            "hover:scale-[1.02] active:scale-[0.97]",
          )}
        >
          <MessageCircle className="w-4 h-4" />
          Via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleSubmitEmail}
          disabled={!isFormValid}
          className={cn(
            "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300",
            "bg-gradient-to-r from-primary to-primary/85 hover:from-primary/90 hover:to-primary/70 text-white dark:from-primary dark:to-primary/80 dark:hover:from-primary/90 dark:hover:to-primary/65",
            "disabled:opacity-40 disabled:pointer-events-none",
            "hover:scale-[1.02] active:scale-[0.97]",
          )}
        >
          <Mail className="w-4 h-4" />
          Via Email
        </button>
      </div>

      {!isFormValid && (
        <p className="text-xs text-slate-400 text-center">
          Remplissez les champs obligatoires (*) pour activer l'envoi.
        </p>
      )}
    </form>
  );
}
