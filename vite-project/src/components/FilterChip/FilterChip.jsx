import './FilterChip.css';
export default function FilterChip({ showOnlyUnread, onToggle }) {
  return (
    <div className="filter-chip">
      <input 
        type="checkbox" 
        id="filterCheckbox" 
        checked={showOnlyUnread}
        onChange={() => onToggle(prev => !prev)} 
      />
      <label htmlFor="filterCheckbox">
        <span className="dot"></span>
        Только непрочитанные
      </label>
    </div>
  );
}