import "./BrandStatment.css";

function BrandStatement() {
  return (
    <section className="statement">
      <div className="statement__top">
        <p className="statement__eyebrow">02 / OUR APPROACH</p>
        <p className="statement__number">WEARSTORE®</p>
      </div>

      <div className="statement__content">
        <h2 className="statement__title">
          LESS NOISE.
          <br />
          MORE PRESENCE.
        </h2>

        <div className="statement__details">
          <p className="statement__description">
            Considered silhouettes. Restrained palettes. Pieces made to work
            beyond a single season.
          </p>

          <a className="statement__link" href="#catalog">
            EXPLORE THE COLLECTION
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BrandStatement;
