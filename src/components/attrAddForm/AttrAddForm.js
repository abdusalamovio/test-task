import { useState } from "react";

const AttrAddForm = ({ addItem }) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState(1);
  const [newPhoto, setNewPhoto] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newLatitude, setNewLatitude] = useState("");
  const [newLongitude, setNewLongitude] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      newName &&
      newDescription &&
      newRating &&
      newPhoto &&
      newLocation &&
      newLatitude &&
      newLongitude
    ) {
      addItem(
        newName,
        newDescription,
        newRating,
        newPhoto,
        newLocation,
        newLatitude,
        newLongitude
      );

      setNewName("");
      setNewDescription("");
      setNewRating(1);
      setNewPhoto("");
      setNewLocation("");
      setNewLatitude("");
      setNewLongitude("");
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  };

  return (
    <>
      <h3>Добавить достопримечательность</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          placeholder="Название"
          type="text"
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          placeholder="Описание"
          type="text"
        />
        <input
          onChange={(e) => setNewRating(e.target.value)}
          value={newRating}
          placeholder="Рейтинг (1-5)"
          type="number"
          min="1"
          max="5"
        />
        <input
          onChange={(e) => setNewPhoto(e.target.value)}
          value={newPhoto}
          placeholder="Ссылка на фото"
          type="text"
        />
        <input
          onChange={(e) => setNewLocation(e.target.value)}
          value={newLocation}
          placeholder="Местоположение"
          type="text"
        />
        <input
          onChange={(e) => setNewLatitude(e.target.value)}
          value={newLatitude}
          placeholder="Широта"
          type="text"
        />
        <input
          onChange={(e) => setNewLongitude(e.target.value)}
          value={newLongitude}
          placeholder="Долгота"
          type="text"
        />
        <button type="submit">Добавить</button>
      </form>
    </>
  );
};

export default AttrAddForm;
