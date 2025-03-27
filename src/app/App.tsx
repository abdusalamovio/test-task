import "./App.css";
import { useState } from "react";
import AttrAddForm from "../components/AttrAddForm";
import AttrList from "../components/AttrList";

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

const App = () => {
  const [data, setData] = useState<Attraction[]>([
    {
      id: 0,
      name: "Кремль",
      description:
        "Кремль — крепость в центре Москвы, на Боровицком холме, у реки Москвы, в историческом центре города.",
      dateAdded: new Date().toLocaleString(),
      rating: 5,
      photo:
        "https://lh3.googleusercontent.com/p/AF1QipOoaG7wUHLL0jTAu-h0cjcooIg-F7hi6HekM6ao=s680-w680-h510",
      location: "Москва, Россия",
      latitude: 55.7558,
      longitude: 37.6176,
      status: "В планах",
    },
  ]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<Attraction | null>(null);

  const toggleAdmin = () => {
    setIsAdmin((prev) => !prev);
  };

  const addItem = (
    name: string,
    description: string,
    rating: number,
    photo: string,
    location: string,
    latitude: number,
    longitude: number
  ) => {
    const newItem: Attraction = {
      id: data.length + 1,
      name,
      description,
      dateAdded: new Date().toLocaleString(),
      rating,
      photo,
      location,
      latitude,
      longitude,
      status: "В планах",
    };
    setData([...data, newItem]);
  };

  const updateItem = (updatedItem: Attraction) => {
    setData(
      data.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditItem(null);
  };

  const deleteItem = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="mx-auto max-w-[1280px] p-4">
      <h1 className="text-4xl text-center font-bold mb-4">
        Планировщик достопримечательностей
      </h1>
      <p className="text-center text-xl mb-4">
        Количество достопримечательностей: {data.length}
      </p>

      <button
        className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-4"
        onClick={toggleAdmin}
      >
        {isAdmin ? "Выйти из админ-режима" : "Войти в админ-режим"}
      </button>

      {isAdmin && (
        <AttrAddForm
          addItem={addItem}
          editItem={editItem}
          updateItem={updateItem}
        />
      )}

      <AttrList
        data={data}
        isAdmin={isAdmin}
        onDelete={deleteItem}
        onEdit={setEditItem}
      />
    </div>
  );
};

export default App;
