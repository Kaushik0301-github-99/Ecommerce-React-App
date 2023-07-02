import React from "react";
import card from "../Css/Card.module.css";
function Card(props) {
  const { data } = props;
  console.log("Printing data at the card component", data);
  return (
    <div className={card.card}>
      <div className={card.imagetitle}>
        <div className={card.imgbox}>
          <img src={data.image} alt={data.category} className={card.img} />
        </div>
        <div className={card.info}>
          <div>{data.title}</div>
          <div>{data.price} Rs</div>
          <div>{data.rating.rate}</div>
        </div>
      </div>
      <div className={card.desc}>
        <div>{data.description}</div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}

export default Card;
