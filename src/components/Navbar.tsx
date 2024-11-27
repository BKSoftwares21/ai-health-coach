import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div className="text-lg font-bold">AI Health Coach</div>
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/about" className="mr-4 hover:underline">About</Link>
        <Link to="/signup" className="hover:underline">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
