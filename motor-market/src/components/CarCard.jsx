import "./CarCard.css";

const hasText = (value) => typeof value === "string" && value.trim() !== "";
const hasValue = (value) => value !== null && value !== undefined;
const numberFormatter = new Intl.NumberFormat("en-US");

export default function CarCard({ car }) {
  const {
    brand,
    model,
    year,
    price,
    mileage,
    fuel,
    engine,
    image,
    isFeatured,
  } = car;

  if (!hasText(brand) || !hasText(model)) {
    return null;
  }

  return (
    <article className="car-card">
      <div className="car-card__media">
        {hasText(image) ? (
          <img src={image} alt={`${brand} ${model}`} loading="lazy" />
        ) : (
          <div className="image-placeholder" role="img" aria-label={`${brand} ${model}: no image`}>
            <span aria-hidden="true">▧</span>
            No Image Available
          </div>
        )}

        {isFeatured === true && <span className="featured-badge">Featured</span>}
      </div>

      <div className="car-card__body">
        <h2>{brand} {model}</h2>

        {hasValue(price) && (
          <p className="car-price">{numberFormatter.format(price)} AZN</p>
        )}

        <dl className="car-details">
          {hasValue(year) && (
            <div><dt>Year</dt><dd>{year}</dd></div>
          )}
          {hasValue(mileage) && (
            <div><dt>Mileage</dt><dd>{numberFormatter.format(mileage)} km</dd></div>
          )}
          {hasText(fuel) && (
            <div><dt>Fuel</dt><dd>{fuel}</dd></div>
          )}
          {hasText(engine) && (
            <div><dt>Engine</dt><dd>{engine}</dd></div>
          )}
        </dl>
      </div>
    </article>
  );
}
