import Card from "./Card";
import style from "./AddCard.module.css";
import { useState } from "react";
const AddCard = ({ items, onAdd }) => {
  const [isHover, setIsHover] = useState(false);
  function addHandler(item) {
    onAdd(item);
  }
  if (!items || items.length === 0) {
    return <></>;
  }
  return (
    <Card>
      <div
        className={style.addCard}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {!isHover && <span className={style.addIcon}>+</span>}
        <ul className={`${style.addBox} ${isHover ? style.show : ""}`}>
          {items.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                addHandler(item.id);
              }}
            >
              {item.id}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default AddCard;
