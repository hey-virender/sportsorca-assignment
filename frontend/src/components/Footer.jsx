import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 py-4 mt-8 shadow-inner">
      <p className="text-center text-white text-sm">
        &copy; {new Date().getFullYear()} SPORTS ORCA. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
