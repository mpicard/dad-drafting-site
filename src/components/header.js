import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <nav className="bg-black fixed w-full">
    <div className="flex flex-wrap items-center mx-auto p-4">
      <Link to="/" className="flex items-center no-underline text-white">
        <span className="font-bold text-2xl tracking-tight">{siteTitle}</span>
      </Link>

      <div className="pl-8 ">
        <Link
          to="/contact"
          className="block-inline font-thin mt-4 md:mt-0 mr-6 no-underline text-grey-light">
          Get Quote
        </Link>

        <Link
          to="/contact"
          className="block-inline font-thin mt-4 md:mt-0 no-underline text-grey-light">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
