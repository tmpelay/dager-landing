import Navbar from "./components/Navbar/Navbar";

import Logo from "./assets/logo.svg";
import ProfilePicture from "./assets/profile.png";
import AboutPicture from "./assets/profile2.png";
import KittyImg from "./assets/kitty.png";
import CodeImg from "./assets/code.png";
import PhilosophyImg from "./assets/philosophy.png";
import GuitarImg from "./assets/guitar.png";
import PicklesImg from "./assets/pickles.png";

import "./App.css";
import { useState } from "react";

const images = [KittyImg, CodeImg, PhilosophyImg, GuitarImg, PicklesImg];

function App() {
  const [imageIndex, setImageIndex] = useState(3);

  const interests = [
    {
      title: "Gatos",
      description:
        "Los gatos son mis compañeros ideales: curiosos, independientes y llenos de personalidad. Siempre encuentran la forma de traer calma, inspiración y un poco de diversión a mis días.",
    },
    {
      title: "Programacion",
      description:
        "La programación es mi manera de combinar lógica y creatividad. Me encanta construir cosas desde cero, resolver problemas y explorar nuevas ideas a través del código. Es un espacio donde puedo dar vida a mis proyectos y compartir lo que me apasiona con el mundo.",
    },
    {
      title: "Filosofia",
      description:
        "La filosofía me invita a cuestionar, reflexionar y entender el mundo desde nuevas perspectivas. Es un espacio donde exploro preguntas profundas, busco significado y trato de conectar ideas que trascienden lo cotidiano.",
    },
    {
      title: "Guitarra",
      description:
        "Tocar la guitarra es más que un pasatiempo; es una forma de expresar emociones y conectar con algo más grande. A través de la música encuentro equilibrio, inspiración y una vía para explorar mi creatividad.",
    },

    {
      title: "Pepinillos",
      description:
        "Los pepinillos, aunque simples, son mi antojo favorito. Me recuerdan que a veces los pequeños placeres son los que realmente marcan la diferencia en la vida.",
    },
  ];

  function changeImage(index: number) {
    setImageIndex(index);
  }

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
        <section className="about" id="about">
          <div className="about__photo">
            <img src={AboutPicture} alt="DotDager" title="DotDager picture" />
          </div>
          <div className="about__content">
            <h2 className="about__title">Sobre mi</h2>
            <p className="about__description">
              ¡Hola! Soy Mariano, también conocido como Dot Dager. Soy creador
              de contenido con pasión por la programación, la filosofía, los
              gatos, las guitarras y, por supuesto, los pepinillos.
              <br />
              <br /> Me encanta explorar ideas y conectar con los demás a través
              de la tecnología y la creatividad. Este espacio refleja quién soy
              y lo que me inspira. ¡Gracias por visitarme!
            </p>
          </div>
        </section>
        <section className="interests" id="interests">
          1
          <div className="interests__slider">
            {images.map((img, i) => {
              return (
                <div
                  className="slider__image"
                  style={{ translate: `${-100 * imageIndex}%` }}
                >
                  <img
                    key={i}
                    src={img}
                    onClick={() => changeImage(i)}
                    className={
                      imageIndex == i ? "image__focused" : "image__unfocused"
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="interests__description">
            <h2 className="interests__title">{interests[imageIndex].title}</h2>
            <p className="interests__text">
              {interests[imageIndex].description}
            </p>
          </div>
        </section>
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
