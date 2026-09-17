import BookForm from '../../components/BookForm/BookForm';
import FilterChip from '../../components/FilterChip/FilterChip';
import BookList from '../../components/BookList/BookList';
import './ShelfScreen.css';
export default function ShelfScreen({ 
  books, 
  showOnlyUnread, 
  onAddBook, 
  onToggleRead, 
  onDeleteBook, 
  onToggleFilter 
}) {
  const filteredBooks = showOnlyUnread 
    ? books.filter((book) => !book.read) 
    : books;

  return (
    <>
  
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>

      <section className="screen active" id="screen-shelf">
        <p className="greeting">Добрый вечер</p>
        
        <BookForm onAdd={onAddBook} />
        
        <div className="list-toolbar">
          <span className="toolbar-title">Книги</span>
          <FilterChip showOnlyUnread={showOnlyUnread} onToggle={onToggleFilter} />
        </div>

        <BookList 
          books={filteredBooks} 
          onToggleRead={onToggleRead} 
          onDelete={onDeleteBook} 
        />
      </section>
    </>
  );
}