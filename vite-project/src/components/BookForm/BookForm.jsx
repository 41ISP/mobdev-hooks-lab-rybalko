import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './BookForm.css';
export default function BookForm({ onAdd }) {
  const [draft, setDraft] = useState('');

  const handleAdd = () => {
    const title = draft.trim();
    if (!title) return;
    
    onAdd(title);  
    setDraft('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="add-book-row">
      <Input 
        value={draft} 
        onChange={(e) => setDraft(e.target.value)} 
        placeholder="Название книги..." 
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleAdd}>Добавить на полку</Button>
    </div>
  );
}