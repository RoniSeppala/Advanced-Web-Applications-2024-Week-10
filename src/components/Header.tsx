import React from "react";

interface headerProps {
    name?: string;
}

const Header:React.FC<headerProps> = ({name}) => {
  return (
    <header className="header">
        <h1>{name ? name : "Default Title"}</h1>
        <nav className="nav">
            <ul className="nav_list">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <button>FI</button>
            <button>EN</button>
        </nav>
    </header>
  );
};

export default Header;