import { Link, useLocation } from 'react-router-dom';
import { 
  Home, ShoppingCart, Package, Users, TrendingUp, 
  Settings, FileText, DollarSign, UserCircle, Truck 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'POS / Sales', icon: ShoppingCart, path: '/pos' },
  { name: 'Products', icon: Package, path: '/products' },
  { name: 'Customers', icon: Users, path: '/customers' },
  { name: 'Suppliers', icon: Truck, path: '/suppliers' },
  { name: 'Reports', icon: TrendingUp, path: '/reports' },
  { name: 'Expenses', icon: DollarSign, path: '/expenses' },
  { name: 'Purchases', icon: FileText, path: '/purchases' },
  { name: 'Users', icon: UserCircle, path: '/users' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();
  const { sidebarOpen } = useStore();

  if (!sidebarOpen) return null;

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card overflow-y-auto transition-all duration-300">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                isActive 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
