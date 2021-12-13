import React from "react";

function Card(props) {

  console.log(props);
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="sold-out">{badgeText}</div>}
      <img src={`./assets/${props.card.img}`} className="card--img" alt="img1" />
      <div className="card-stats">
        <img src="./assets/estrella.png" alt="" className="card-star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviews}) • </span>
        <span className="gray">{props.card.country}</span>
      </div>
      <p className="card-tittle">{props.card.title}</p>
      <p>
        <span className="bold">From $ {props.card.price}</span>/ person
      </p>
    </div>
  );
}

export default Card;
