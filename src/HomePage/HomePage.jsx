import axios from "axios";
import { useEffect, useState } from "react";

import "./HomePage.css";
import EditCard from "../EditCard/EditCard";

function HomePage({ dogs, cats, birds }) {
  const [selectedCard, setSelectedCard] = useState(false);
  console.log("dogs: ", dogs);
  return (
    <main className="home-page">
      <section className="gallery-container">
        {dogs
          .concat(cats)
          .concat(birds)
          .map((animal) => {
            return (
              <div
                className="card-container"
                onClick={() => setSelectedCard(animal)}
              >
                <div>
                  <label className="label" htmlFor="Name">
                    Name:{" "}
                  </label>
                  <span>{animal.name}</span>
                </div>
                <div>
                  <label className="label" htmlFor="Breed">
                    Breed:{" "}
                  </label>
                  {animal.breed_group}
                </div>
                <div>
                  <label className="label" htmlFor="Lifespan">
                    Lifespan:{" "}
                  </label>
                  {animal.lifespan}
                </div>
                <div>
                  <label className="label" htmlFor="Category">
                    Category:{" "}
                  </label>
                  {animal.category}
                </div>
              </div>
            );
          })}
        {selectedCard ? (
          <EditCard
            animal={selectedCard}
            closeCard={() => setSelectedCard(false)}
          />
        ) : null}
      </section>
    </main>
  );
}

export default HomePage;
