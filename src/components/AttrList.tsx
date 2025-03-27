import { FC } from "react";

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

type AttrListProps = {
  data: Attraction[];
  isAdmin: boolean;
  onDelete: (id: number) => void;
  onEdit: (item: Attraction) => void;
};

const AttrList: FC<AttrListProps> = ({ data, isAdmin, onDelete, onEdit }) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border border-gray-300">Название</th>
          <th className="p-2 border border-gray-300">Описание</th>
          <th className="p-2 border border-gray-300">Дата добавления</th>
          <th className="p-2 border border-gray-300">Рейтинг</th>
          <th className="p-2 border border-gray-300">Фото</th>
          <th className="p-2 border border-gray-300">Местоположение</th>
          <th className="p-2 border border-gray-300">Ширина</th>
          <th className="p-2 border border-gray-300">Долгота</th>
          <th className="p-2 border border-gray-300">Ссылка</th>
          <th className="p-2 border border-gray-300">Статус</th>
          {isAdmin && <th className="p-2 border border-gray-300">Действия</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="p-2 border border-gray-300">{item.name}</td>
            <td className="p-2 border border-gray-300">{item.description}</td>
            <td className="p-2 border border-gray-300">{item.dateAdded}</td>
            <td className="p-2 border border-gray-300">{item.rating}</td>
            <td className="p-2 border border-gray-300">
              <img
                src={item.photo}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="p-2 border border-gray-300">{item.location}</td>
            <td className="p-2 border border-gray-300">{item.latitude}</td>
            <td className="p-2 border border-gray-300">{item.longitude}</td>
            <td className="p-2 border border-gray-300">
              <a
                href={`https://www.google.com/maps?q=${item.latitude},${item.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Открыть на карте
              </a>
            </td>
            <td className="p-2 border border-gray-300">{item.status}</td>
            {isAdmin && (
              <td className="p-2 border border-gray-300">
                <button
                  onClick={() => onEdit(item)}
                  className="bg-yellow-500 text-white p-2 rounded mr-2 hover:bg-yellow-600"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  Удалить
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttrList;
