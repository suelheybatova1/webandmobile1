import { cars } from "../data/cars.js";
import CarCard from "./CarCard.jsx";
import Aside from "./Aside.jsx";

const hasText = (value) => typeof value === "string" && value.trim() !== "";

export default function Main() {
  const validCars = cars.filter(
    (car) => hasText(car.brand) && hasText(car.model),
  );

  // Part E filtering practice (use one of these instead of validCars below):
  // Filter A: validCars.filter((car) => car.price != null && car.price < 30000);
  // Filter B: validCars.filter((car) => car.year != null && car.year >= 2020);
  // Filter C: validCars.filter((car) => car.isFeatured === true);
  // Filter D: validCars.filter((car) => car.mileage != null && car.mileage < 60000);
  const visibleCars = validCars;

  return (
    <main className="container page-layout">
      <section className="listings" id="listings" aria-labelledby="listings-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore the marketplace</p>
            <h1 id="listings-title">Car Listings</h1>
          </div>
          <p className="listing-count">
            <strong>{visibleCars.length}</strong> cars available
          </p>
        </div>

        <div className="car-grid">
          {visibleCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <Aside />
    </main>
  );
}
