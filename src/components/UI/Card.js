import React from "react";
import "./Card.css";

const Card = (props) => {
  //variable composée de la classe ainsi que props.class comme param de Card dans un autre fichier
  const classes = "card " + props.className;

  //props.children permet de ouput les elements à l'interieur de notre Card component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
