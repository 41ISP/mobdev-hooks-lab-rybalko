import './Checkbox.css'; 
export default function Checkbox({ checked, onChange, label }) {
  return (
    <div 
      className={`read-check ${checked ? 'checked' : ''}`}
      onClick={onChange}
    >
      <span className="check-circle">✓</span>
      <span className="read-label">{label}</span>
    </div>
  );
}