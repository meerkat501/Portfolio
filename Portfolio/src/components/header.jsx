import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Leonardo Soto`s portfolio</h1>
      <nav>
        <Link exact to="/" activeClassName="active">About Me</Link>
        <Link to="/portfolio" activeClassName="active">Portfolio</Link>
        <Link to="/contact" activeClassName="active">Contact</Link>
        <Link to="/resume" activeClassName="active">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
