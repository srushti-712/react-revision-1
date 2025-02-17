/*
below I have forwarded the props from the TabButton used in the Examples 
So in this case I have forwarded the onClick and notice I have changed the name of the prop in Examples.jsx 
from handleSelect to onClick - the default name of the prop 
*/
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
    </li>
  );
}
