import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFAB } from './WhatsAppFAB';

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col relative selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-1 w-full overflow-hidden">
        <Outlet />
      </main>
      
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
