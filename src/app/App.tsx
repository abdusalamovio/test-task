// App.tsx
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
      photo: "",
      location: "Москва, Россия",
      latitude: 55.7558,
      longitude: 37.6176,
      status: "В планах",
    },
  ]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

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

  const deleteItem = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Планировщик достопримечательностей</h1>
      <p>Количество достопримечательностей: {data.length}</p>

      <button onClick={toggleAdmin}>
        {isAdmin ? "Выйти из админ-режима" : "Войти в админ-режим"}
      </button>
      {isAdmin && <AttrAddForm addItem={addItem} />}

      <AttrList data={data} isAdmin={isAdmin} onDelete={deleteItem} />
    </div>
  );
};

export default App;
