import { useEffect, useState } from "react";
import style from "./LangSort.module.css";
const programType = ["js", "python", "java", "c++"];
const LangSort = ({ dataList }) => {
  const [rate, setRate] = useState([]);
  useEffect(() => {
    const unsortedRate = programType.map((lang, index) => {
      let langRate = 1;
      dataList.forEach((card) => {
        langRate += card.multiple * (1 - 0.25 * card.rate.indexOf(index));
      });
      return { lang, rate: langRate };
    });
    setRate(unsortedRate.sort((a, b) => b.rate - a.rate));
  }, [dataList]);

  return (
    <ul className={style.langSort}>
      <div className={style.header}>Score:</div>
      {rate.map((item, i) => (
        <li key={i} className={style.item}>
          <span>{item.lang}</span>
          <span>{item.rate}</span>
        </li>
      ))}
    </ul>
  );
};
export default LangSort;
