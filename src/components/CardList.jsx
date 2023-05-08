import style from "./CardList.module.css";
import AddCard from "./AddCard";
import ItemCard from "./ItemCard";
const CardList = ({ cards, setCards, dataList }) => {
  function addCardHandler(id) {
    setCards([
      ...cards,
      { ...dataList.find((item) => item.id === id), multiple: 1 },
    ]);
  }
  function changeMultipleHandler(id, multiple) {
    const editedCards = cards;
    const card = editedCards.find((item) => item.id === id);
    card.multiple = multiple;
    setCards([...editedCards]);
    console.log(cards);
  }
  function deleteMultipleHandler(id) {
    setCards(cards.filter((item) => item.id !== id));
  }
  if (!dataList || dataList.length === 0) {
    return (
      <ul>
        <p>there is no item</p>
      </ul>
    );
  }
  return (
    <ul className={style.cardList}>
      {cards.map((item, i) => (
        <ItemCard
          key={i}
          item={item}
          onChangeMultiple={changeMultipleHandler}
          onDelete={deleteMultipleHandler}
        />
      ))}

      <AddCard
        items={[
          ...dataList.filter(
            (dataListItem) =>
              ![...cards.map((item) => item.id)].includes(dataListItem.id)
          ),
        ]}
        onAdd={addCardHandler}
      />
    </ul>
  );
};
export default CardList;
