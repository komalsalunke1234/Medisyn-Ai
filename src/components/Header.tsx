import { Link, useLocation } from 'react-router-dom';
import { Activity, Home, Brain, Info } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-blue-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                MediSyn
              </h1>
              <p className="text-xs text-gray-500 font-medium">AI Ultrasound Analysis</p>
            </div>
          </Link>

          <nav className="flex items-center space-x-1">
            <button
              onClick={() => window.location.href = '/'}
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="font-medium">Home</span>
            </button>
            <button
              onClick={() => window.location.href = '/analysis'}
              to="/analysis"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/analysis') 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Brain className="h-4 w-4" />
              <span className="font-medium">Analysis</span>
            </button>
            <button
              onClick={() => window.location.href = '/about'}
              to="/about"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/about') 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Info className="h-4 w-4" />
              <span className="font-medium">About</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;