import { Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediCheck</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>Home</Link>
            <Link to="/checker" className={`${isActive('/checker')} transition-colors duration-200`}>Symptom Checker</Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
