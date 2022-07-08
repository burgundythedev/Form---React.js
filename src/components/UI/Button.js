import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className="global-button"
        //props.type permet d'avoir un button dynamique selon l'utilisation du button
        type={props.type || "button"}
        //props.onClick fonction ratachée dans un autre fichier
        onClick={props.onClick}
      >
        Add
      </button>
    </div>
  );
};

export default Button;
