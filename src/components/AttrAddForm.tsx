import { useState, useEffect } from "react";

type AttrAddFormProps = {
  addItem: (
    name: string,
    description: string,
    rating: number,
    photo: string,
    location: string,
    latitude: number,
    longitude: number
  ) => void;
  editItem: Attraction | null;
  updateItem: (updatedItem: Attraction) => void;
};

type Attraction = {
  id: number;
  name: string;
  description: string;
  dateAdded: string;
  rating: number;
  photo: string;
  location: string;
  latitude: number;
  longitude: number;
  status: string;
};

const AttrAddForm = ({ addItem, editItem, updateItem }: AttrAddFormProps) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState(1);
  const [newPhoto, setNewPhoto] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newLatitude, setNewLatitude] = useState("");
  const [newLongitude, setNewLongitude] = useState("");

  useEffect(() => {
    if (editItem) {
      setNewName(editItem.name);
      setNewDescription(editItem.description);
      setNewRating(editItem.rating);
      setNewPhoto(editItem.photo);
      setNewLocation(editItem.location);
      setNewLatitude(editItem.latitude.toString());
      setNewLongitude(editItem.longitude.toString());
    }
  }, [editItem]);

  const onSubmit = (e: React.FormEvent) => {
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
      if (editItem) {
        updateItem({
          ...editItem,
          name: newName,
          description: newDescription,
          rating: newRating,
          photo: newPhoto,
          location: newLocation,
          latitude: parseFloat(newLatitude),
          longitude: parseFloat(newLongitude),
        });
      } else {
        addItem(
          newName,
          newDescription,
          newRating,
          newPhoto,
          newLocation,
          parseFloat(newLatitude),
          parseFloat(newLongitude)
        );
      }

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
      <h3 className="text-2xl mb-4">
        {editItem
          ? "Редактировать достопримечательность"
          : "Добавить достопримечательность"}
      </h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          placeholder="Название"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          placeholder="Описание"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setNewRating(Number(e.target.value))}
          value={newRating}
          placeholder="Рейтинг (1-5)"
          type="number"
          min="1"
          max="5"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setNewPhoto(e.target.value)}
          value={newPhoto}
          placeholder="Ссылка на фото"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setNewLocation(e.target.value)}
          value={newLocation}
          placeholder="Местоположение"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setNewLatitude(e.target.value)}
          value={newLatitude}
          placeholder="Широта"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setNewLongitude(e.target.value)}
          value={newLongitude}
          placeholder="Долгота"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {editItem ? "Сохранить изменения" : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default AttrAddForm;
