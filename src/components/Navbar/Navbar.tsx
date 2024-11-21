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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Interests</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
