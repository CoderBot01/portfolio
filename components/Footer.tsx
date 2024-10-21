import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-10 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center  flex justify-center items-center md:text-left mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Praveenkmumar Ellaikkarasu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
