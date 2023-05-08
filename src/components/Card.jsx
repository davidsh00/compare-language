import { useState } from "react";
import style from "./Card.module.css";
const Card = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};

export default Card;
