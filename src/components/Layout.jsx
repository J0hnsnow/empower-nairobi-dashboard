import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';

const Layout = ({ children }) => {
  const location = useLocation();
  const { user, login, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <nav className="bg-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">OP Network</Link>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-white hover:text-blue-200 transition-colors ${
                  location.pathname === item.to ? 'font-bold' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
            {user ? (
              <Button onClick={logout} variant="outline">Logout</Button>
            ) : (
              <Button onClick={login} variant="outline">Login</Button>
            )}
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;