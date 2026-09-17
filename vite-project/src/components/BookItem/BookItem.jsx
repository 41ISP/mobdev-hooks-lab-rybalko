import Checkbox from '../Checkbox/Checkbox';
import './BookItem.css';
export default function BookItem({ book, onToggleRead, onDelete }) {
  const colors = ['#4f6b52', '#6b4f52', '#524f6b', '#6b5e4f', '#4f6b6a'];
  const bgColor = colors[book.id % colors.length];

  return (
    <div className="book-row" data-id={book.id}>
      <div className="book-cover" style={{ background: bgColor }}>
        {book.title.charAt(0).toUpperCase()}
      </div>
      <div className="book-info">
        <p className={`book-title ${book.read ? 'done' : ''}`}>{book.title}</p>
        <div className="book-author">{book.author}</div>
      </div>
      
      <Checkbox
        checked={book.read}
        onChange={() => onToggleRead(book.id)}
        label="Прочитано"
      />
      
      <button className="delete-btn" onClick={() => onDelete(book.id)} title="Убрать с полки">
        ✕
      </button>
    </div>
  );
}