import Navbar from "./components/Navbar/Navbar";
import Logo from "./assets/logo.svg";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <p className="header__hi">Holi</p>
          <i className="bx bx-down-arrow header__arrow"></i>
        </div>
      </header>
      <main>
        <Navbar />
        <section className="home"></section>
        <section className="about"></section>
        <section className="interests"></section>
        <section className="contact"></section>
      </main>
      <footer className="footer">
        <img
          src={Logo}
          className="footer__logo"
          alt="DotDager"
          title="DotDager"
        />
        <div className="footer__content">
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
          <span className="footer__line"></span>
          <p className="footer__rights">
            © 2024 Dot Dager, hecho con amor para marianito
          </p>
        </div>
      </footer>
      <section className="bye">
        <div className="bye__content">
          <p className="bye__bye">Chau</p>
          <i className="bx bx-up-arrow bye__arrow"></i>
        </div>
      </section>
    </>
  );
}

export default App;
