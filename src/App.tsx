import Navbar from "./components/Navbar/Navbar";

import Logo from "./assets/logo.svg";
import ProfilePicture from "./assets/profile.png";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <p className="header__hi">Holi</p>
          <a href="#home" className="header__arrow">
            <i className="bx bx-down-arrow "></i>
          </a>
        </div>
      </header>
      <main>
        <Navbar />
        <section className="home" id="home">
          <div className="home__content">
            <p className="home__me">Soy Mariano</p>
            <h1 className="home__title">Desarrollador Full-Stack Senior</h1>
            <div className="home__content-wrapper">
              <span className="home__content-line"></span>
              <p className="home__joke">
                ...y contador serial de chistes de mierda
              </p>
            </div>
            <p className="home__description">
              Soy un creador de contenido al que le gusta programar a la vez que
              come pepinos, me gusta tambien filosofar, los gatos y las
              guitarras.
            </p>
            <div className="home__links">
              <a href="https://www.youtube.com/@DotDager" target="blank">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="https://github.com/MarianoVilla" target="blank">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.instagram.com/dager.32/" target="blank">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.reddit.com/user/DagerDotCSV/" target="blank">
                <i className="bx bxl-reddit"></i>
              </a>
            </div>
          </div>
          <div className="home__photo">
            <img src={ProfilePicture} alt="DotDager" title="DotDager picture" />
          </div>
        </section>
        <section className="about" id="about"></section>
        <section className="interests" id="intetests"></section>
        <section className="contact" id="contact">
          <div className="contact__content">
            <h2 className="contact__title">Contactame</h2>
            <p className="contact__text">
              <i>¿Quieres saber más o trabajar conmigo? ¡Hablemos!</i>
            </p>
            <div className="contact__info">
              <div className="info__container">
                <i className="bx bx-current-location info__icon"></i>
                <p className="info__value">
                  Los pepinillos 624, Buenos aires, Argentina
                </p>
              </div>
              <div className="info__container">
                <i className="bx bxs-phone info__icon"></i>
                <p className="info__value">+54 911 911911-911911</p>
              </div>
              <div className="info__container">
                <i className="bx bx-envelope info__icon"></i>
                <p className="info__value">marianita@gmail.com</p>
              </div>
            </div>
            <span className="contact__line"></span>
            <div className="contact__links-wrapper">
              <p className="contact__follow-me">Seguime</p>
              <div className="contact__links">
                <a href="https://www.youtube.com/@DotDager" target="blank">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a href="https://github.com/MarianoVilla" target="blank">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.instagram.com/dager.32/" target="blank">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.reddit.com/user/DagerDotCSV/"
                  target="blank"
                >
                  <i className="bx bxl-reddit"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact__form-container">
            <p className="form__title">Enviame un mensaje</p>
            <form action="" className="contact__form">
              <input
                type="text"
                className="form__input"
                placeholder="Nombre"
                required
              />
              <input
                type="text"
                className="form__input"
                placeholder="Email"
                required
              />
              <input
                type="text"
                className="form__input"
                placeholder="Mensaje"
                required
              />
              <button type="submit" className="form__button">
                Enviar
              </button>
            </form>
          </div>
        </section>
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
          <span className="footer__line"></span>
          <p className="footer__rights">
            © 2024 Dot Dager, hecho con amor para marianito
          </p>
        </div>
      </footer>
      <section className="bye">
        <div className="bye__content">
          <p className="bye__bye">Chau</p>
          <a href="#home" className="bye__arrow">
            <i className="bx bx-up-arrow "></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
