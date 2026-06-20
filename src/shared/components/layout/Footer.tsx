import { Link } from "react-router-dom";
import { COMPANY } from "../../constants/company";
import { NAV_LINKS } from "../../constants/routes";
import { SOCIAL_LINKS } from "../../constants/social";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#080d14] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img
                src="/logo.svg"
                alt="Solinexia Logo"
                className="w-10 h-10 group-hover:scale-105 transition-transform"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mb-6">
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
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-4">
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
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-4">
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

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 mb-4 sm:mb-0">
            © {new Date().getFullYear()} {COMPANY.fullName}. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
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
