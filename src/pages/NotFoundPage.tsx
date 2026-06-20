import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '../shared/components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <span className="font-heading font-bold text-3xl text-primary">404</span>
      </div>
      <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
        Page introuvable
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div className="flex gap-4">
        <Button asChild variant="primary" leftIcon={<Home className="w-4 h-4" />}>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
        <Button asChild variant="outline" leftIcon={<ArrowLeft className="w-4 h-4" />}>
          <button onClick={() => window.history.back()}>Retour</button>
        </Button>
      </div>
    </div>
  );
}
