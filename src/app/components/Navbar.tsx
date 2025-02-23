import React from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://images.vexels.com/media/users/3/143237/isolated/preview/df48a347a3d194d12d68155ea5bf0a02-icono-de-dibujos-animados-plana-de-camarones.png"
          alt="Logo"
        />
      </div>
      <ul className="navbar-menu">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
