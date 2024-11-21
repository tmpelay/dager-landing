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
      <section className="home"></section>
      <section className="last"></section>
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
