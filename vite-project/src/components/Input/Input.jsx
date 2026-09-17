import './Input.css'; 
export default function Input({ value, onChange, placeholder, onKeyDown }) {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
}