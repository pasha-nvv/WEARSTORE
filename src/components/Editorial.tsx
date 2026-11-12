import "./Editorial.css";

function Editorial() {
  return (
    <section className="editorial">
      <div className="editorial__image">
        <img
          src="./images/editorial.jpg"
          alt="Model wearing an avant-garde streetwear outfit"
        />
      </div>

      <div className="editorial__content">
        <p className="editorial__eyebrow">THE WEARSTORE EDIT</p>

        <h2 className="editorial__title">
          LESS, BUT
          <br />
          BETTER.
        </h2>

        <p className="editorial__description">
          A new perspective on everyday dressing.
          Designed to stand out without saying too much.
        </p>

        <a href="#catalog" className="editorial__link">
          EXPLORE THE COLLECTION ↗
        </a>
      </div>
    </section>
  );
}

export default Editorial;
