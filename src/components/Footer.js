import "../blocks/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__name-content">
        <p className="footer__text">Developed by Kurtney Joseph</p>
      </div>
      <p className="footer__text">{year}</p>
    </footer>
  );
}

export default Footer;
