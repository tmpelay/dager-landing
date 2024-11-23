import Logo from "../../assets/logo.svg";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="DotDager" />
        <h1>dotdager</h1>
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#interests">Interests</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
