import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white h-16 flex justify-center items-center px-4 sticky bottom-0">
      <p className="text-center font-bold font-mono">
        Copyright &copy;{currentYear} PatreonHive – All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;