import Card from "./Card";
import style from "./ItemCard.module.css";
const ItemCard = ({ item, onChangeMultiple, onDelete }) => {
  const programType = ["js", "python", "java", "c++"];

  function changeHandler(e) {
    onChangeMultiple(item.id, e.target.value!=="" ? +e.target.value : 1);
  }
  return (
    <Card>
      <div className={style.cardItem}>
        <span
          className={style.closeIcon}
          onClick={() => {
            onDelete(item.id);
          }}
        >
          x
        </span>
        <input
          type="number"
          placeholder="Multiple(1)"
          onChange={changeHandler}
        />
        <h3>{item.id}</h3>
        <ul>
          {item.rate.map((lang, i) => (
            <li key={i}>{programType[lang]}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default ItemCard;
