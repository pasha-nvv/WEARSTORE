import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">WEARSTORE - NEW SEASON</p>

        <h1 className="hero__title">
          THE NEW
          <br />
          DAILY UNIFORM.
        </h1>

        <p className="hero__description">
          Modern essentials. Clean silhouettes. Nothing unnecessary.
        </p>

        <a href="#catalog" className="hero__button">
          DISCOVER THE COLLECTION
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero__media">
        <img
          src="./images/hero.jpg"
          alt="Model wearing a contemporary fashion outfit"
        />
        <span className="hero__image-label">
          NEW COLLECTION / 01
        </span>
      </div>
    </section>
  );
}

export default Hero;
