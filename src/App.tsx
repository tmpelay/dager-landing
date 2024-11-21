import "./App.css";
import Navbar from "./components/Navbar/Navbar";

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
        <section className="last"></section>
      </main>
      <footer className="footer">
        <div className="footer__content">
          <p className="footer__bye">Chau</p>
          <i className="bx bx-up-arrow footer__arrow"></i>
        </div>
      </footer>
    </>
  );
}

export default App;
