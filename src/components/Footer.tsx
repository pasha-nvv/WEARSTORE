import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <a className="footer__logo" href="#catalog">
          WEARSTORE<span>®</span>
        </a>

        <p className="footer__description">
          MODERN ESSENTIALS.
          <br />
          NOTHING UNNECESSARY.
        </p>

        <a className="footer__link" href="#catalog">
          SHOP THE COLLECTION
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer__bottom">
        <p>© 2026 WEARSTORE</p>
        <p>DESIGNED FOR EVERYDAY.</p>
      </div>
    </footer>
  );
}

export default Footer;