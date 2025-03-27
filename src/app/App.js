import { useState } from "react";

import AttrAddForm from "../components/attrAddForm/AttrAddForm";
import AttrList from "../components/attrList/AttrList";

const App = () => {
  const [data, setData] = useState([
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
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin((prev) => !prev);
  };

  const addItem = (
    name,
    description,
    rating,
    photo,
    location,
    latitude,
    longitude
  ) => {
    const newItem = {
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

  const deleteItem = (id) => {
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
