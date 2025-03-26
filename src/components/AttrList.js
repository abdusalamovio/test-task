const AttrList = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Описание</th>
          <th>Дата добавления</th>
          <th>Рейтинг</th>
          <th>Фото</th>
          <th>Местоположение</th>
          <th>Ширина</th>
          <th>Долгота</th>
          <th>Ссылка</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.dateAdded}</td>
            <td>{item.rating}</td>
            <td>
              <img src={item.photo} alt={item.name} />
            </td>
            <td>{item.location}</td>
            <td>{item.latitude}</td>
            <td>{item.longitude}</td>
            <td>
              <a
                href={`https://www.google.com/maps?q=${item.latitude},${item.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть на карте
              </a>
            </td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttrList;
