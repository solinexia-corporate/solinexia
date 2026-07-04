import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Images } from "../../../assets/images";
import { NAV_LINKS } from "../../constants/routes";
import { useScrollProgress } from "../../hooks/useScroll";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const progress = useScrollProgress();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-[#080d14]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={Images.logo}
                alt="Solinexia Logo"
                className="h-10 w-auto md:h-11 rounded-lg group-hover:scale-105 transition-transform"
              />
              <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-white">
                Solinexia
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-slate-600 dark:text-slate-300",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <Button asChild variant="primary" size="sm">
                <Link to="/contact">Démarrer un projet</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-primary/20 w-full">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#080d14] pt-24 px-4 pb-6 flex flex-col lg:hidden"
          >
            <nav className="flex flex-col gap-4 mb-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-2xl font-heading font-bold transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-slate-900 dark:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Button asChild variant="primary" size="lg" className="w-full">
                <Link to="/contact">Démarrer un projet</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
