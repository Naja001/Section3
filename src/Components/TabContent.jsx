//with ...props we are collecting props from Exemples in this case and instead onSelect props 
//that we used we are gattering props like in this exemple onClick={() => handleSelect("jsx")}

//into the button tag  we used onClick={onSelect} than in Exemples components OnSelect= {() => handleSelect("jsx")}

export default function TabContent({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
