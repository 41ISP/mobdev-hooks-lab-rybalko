import { useState } from 'react';
import ShelfScreen from './pages/ShelfScreen/ShelfScreen';

function App() {
  const [books, setBooks] = useState([
    { id: 1,
      title: 'Клара и Солнце',
      author: 'Кадзуо Исигуро',
      read: true },
    { id: 2,
      title: '1984',
      author: 'Дж. Оруэлл',
      read: false },
  ]);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  const handleAddBook = (title) => {
    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: 'Неизвестный автор',
      read: false,
    };
    setBooks((books) => [...books, newBook]);
  };

  const handleToggleRead = (id) => {
    setBooks((books) =>
      books.map((book) =>
      book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  const handleDeleteBook = (id) => {
    setBooks((books) => books.filter((book) => book.id !== id));
  };

  const handleToggleFilter = () => {
    setShowOnlyUnread((books) => !books);
  };

  return (
    <div className="app">
      <ShelfScreen
        books={books}
        showOnlyUnread={showOnlyUnread}
        onAddBook={handleAddBook}
        onToggleRead={handleToggleRead}
        onDeleteBook={handleDeleteBook}
        onToggleFilter={handleToggleFilter}
      />
    </div>
  );
}

export default App;