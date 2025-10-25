import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { sidebarOpen } = useStore();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <main 
        className={cn(
          'pt-20 pb-6 px-6 transition-all duration-300',
          sidebarOpen ? 'ml-64' : 'ml-0'
        )}
      >
        {children}
      </main>
    </div>
  );
}
