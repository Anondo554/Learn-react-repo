const Menu = ({className, mtext}) => {
  return (
    <ul>
      <li className={`${className}`}>{mtext}</li>
    </ul>
  );
};

export default Menu;
