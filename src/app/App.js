import { useState } from "react";

import AttrAddForm from "../components/AttrAddForm";
import AttrList from "../components/AttrList";

const App = () => {
  const [data, setData] = useState([
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

  return (
    <div>
      <h1>Планировщик достопримечательностей</h1>
      <p>Количество достопримечательностей: {data.length}</p>

      <AttrAddForm addItem={addItem} />
      <AttrList data={data} />
    </div>
  );
};

export default App;
