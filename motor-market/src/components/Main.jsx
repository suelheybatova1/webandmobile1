import { cars } from "../data/cars.js";
import CarCard from "./CarCard.jsx";
import Aside from "./Aside.jsx";

const hasText = (value) => typeof value === "string" && value.trim() !== "";

export default function Main({favorites, toggleFavorite}) {
  const validCars = cars.filter(
    (car) => hasText(car.brand) && hasText(car.model),
  );
  const visibleCars = cars;

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
            <CarCard
            key={car.id}
            car={car}
            isFavorite={favorites.includes(car.id)}
            onToggleFavorite={() => toggleFavorite(car.id)}
/>
          ))}
        </div>
      </section>

      <Aside />
    </main>
  );
}
