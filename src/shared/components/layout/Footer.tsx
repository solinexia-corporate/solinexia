import { Link } from "react-router-dom";
import { Images } from "../../../assets/images";
import { COMPANY } from "../../constants/company";
import { NAV_LINKS } from "../../constants/routes";
import { SOCIAL_LINKS } from "../../constants/social";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/60 dark:border-slate-800/60">
      {/* Gradient background — modern SaaS feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-primary/8 to-secondary/12 dark:from-[#0d1320] dark:via-[#0e1422] dark:to-[#0b1018]" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-secondary/10 dark:bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img
                src={Images.logo}
                alt="Solinexia Logo"
                className="h-12 w-auto rounded-lg group-hover:scale-105 transition-transform"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              {COMPANY.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] dark:hover:bg-[#25D366] dark:hover:text-white dark:hover:border-[#25D366] transition-all duration-300 cursor-pointer"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact infos */}
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Nous trouver
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600 dark:text-slate-400">
                {COMPANY.location}
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                {COMPANY.email}
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                {COMPANY.phone}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-200/60 dark:border-white/10">
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-4 sm:mb-0">
            © {new Date().getFullYear()} {COMPANY.fullName}. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Systèmes opérationnels
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
