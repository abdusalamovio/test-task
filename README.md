6 часов ушло на решение тестового задания.

# Простая документация REST API для работы с достопримечательностями

## Базовый URL

```
http://localhost:3000/api
```

## Эндпоинты

### 1. Получить список всех достопримечательностей

**Запрос:**

```
GET /attractions
```

**Что делает:** Возвращает все достопримечательности.

**Пример ответа:**

```json
[
  {
    "id": 1,
    "name": "Эйфелева башня",
    "description": "Знаменитая башня в Париже",
    "rating": 5,
    "photo": "url_to_photo",
    "location": "Париж, Франция",
    "latitude": 48.8584,
    "longitude": 2.2945,
    "status": "в планах"
  }
]
```

---

### 2. Получить информацию о конкретной достопримечательности

**Запрос:**

```
GET /attractions/{id}
```

**Что делает:** Возвращает информацию о конкретном месте.

**Пример ответа:**

```json
{
  "id": 1,
  "name": "Эйфелева башня",
  "description": "Знаменитая башня в Париже",
  "rating": 5,
  "photo": "url_to_photo",
  "location": "Париж, Франция",
  "latitude": 48.8584,
  "longitude": 2.2945,
  "status": "в планах"
}
```

---

### 3. Добавить новую достопримечательность

**Запрос:**

```
POST /attractions
```

**Что делает:** Создаёт новое место.

**Пример тела запроса:**

```json
{
  "name": "Колизей",
  "description": "Античный амфитеатр в Риме",
  "rating": 5,
  "photo": "url_to_photo",
  "location": "Рим, Италия",
  "latitude": 41.8902,
  "longitude": 12.4922
}
```

**Пример ответа:**

```json
{
  "id": 2,
  "name": "Колизей",
  "description": "Античный амфитеатр в Риме",
  "rating": 5,
  "photo": "url_to_photo",
  "location": "Рим, Италия",
  "latitude": 41.8902,
  "longitude": 12.4922,
  "status": "в планах"
}
```

---

### 4. Изменить информацию о достопримечательности

**Запрос:**

```
PUT /attractions/{id}
```

**Что делает:** Обновляет информацию о месте.

**Пример тела запроса:**

```json
{
  "name": "Эйфелева башня",
  "description": "Обновленное описание",
  "rating": 4,
  "photo": "new_url_to_photo",
  "location": "Париж, Франция",
  "latitude": 48.8584,
  "longitude": 2.2945,
  "status": "осмотрена"
}
```

**Пример ответа:**

```json
{
  "id": 1,
  "name": "Эйфелева башня",
  "description": "Обновленное описание",
  "rating": 4,
  "photo": "new_url_to_photo",
  "location": "Париж, Франция",
  "latitude": 48.8584,
  "longitude": 2.2945,
  "status": "осмотрена"
}
```

---

### 5. Удалить достопримечательность

**Запрос:**

```
DELETE /attractions/{id}
```

**Что делает:** Удаляет место по ID.

**Пример ответа:**

```json
{
  "message": "Достопримечательность удалена"
}
```

---

## Возможные ошибки

- **200 OK** – Всё хорошо
- **201 Created** – Создано успешно
- **400 Bad Request** – Ошибка в запросе
- **404 Not Found** – Место не найдено
- **500 Internal Server Error** – Ошибка сервера
