import "./EditCard.css";

function EditCard({ animal, closeCard }) {
  return (
    <div className="edit-card-wrapper">
      <div className="edit-card-container">
        <header className="edit-card-header">Card header</header>
        <div className="edit-card-body">
          <label className="label" for="name">
            Name:{" "}
          </label>
          <span>{animal.name}</span>
          <label className="label" for="breed">
            Breed:{" "}
          </label>
          <span>{animal.breed_group}</span>
          <label className="label">Origin:</label>
          <span>{animal.origin}</span>
          <label className="label">Size:</label>
          <span>{animal.size}</span>
          <label className="label">Lifespan:</label>
          <span>{animal.lifespan}</span>
          <label className="label">Description:</label>
          <span>{animal.description}</span>
        </div>
        <footer className="edit-card-footer">
          <button onClick={closeCard}>Close</button>
        </footer>
      </div>
    </div>
  );
}

export default EditCard;
