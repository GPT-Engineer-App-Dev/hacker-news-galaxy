import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, DollarSign } from 'lucide-react';
import { navItems } from '../nav-items';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-black border-b border-hacker-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-hacker-green text-xl font-bold">HackerApp</Link>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center text-hacker-green hover:text-hacker-darkGreen transition-colors duration-200 ${
                location.pathname === item.to ? 'border-b-2 border-hacker-green' : ''
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;