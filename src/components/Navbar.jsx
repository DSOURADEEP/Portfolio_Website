import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-10 py-2 px-6 shadow-md">
      <ul className="flex justify-end space-x-6 text-white text-lg font-semibold">
        <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
        <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
        <li><a href="#experience" className="hover:text-yellow-400 transition">Experience</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
