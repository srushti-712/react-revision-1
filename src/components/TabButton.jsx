export default function TabButton({ children, handleSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={handleSelect}>
        {children}
      </button>
    </li>
  );
}
