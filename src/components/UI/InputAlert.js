import React from "react";
import "./InputAlert.css";
import Card from "./Card";
import Button from "./Button";

const InputAlert = (props) => {
  return (
    <div>
      {/* onClick={props.onConfirm} recupere la function errorHandler dans le component UserForm pour annuler l'erreur overlay qui s'affiche */}
      <div className="backdrop" onClick={props.onConfirm}>
        <Card className="modal">
          <header className="header">
            {/* recupere le titre et message a afficher selon la conditon d'erreur configurer dans userForm component setError({title, message}) */}
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="actions">
            {/* onClick={props.onConfirm} recupere la function errorHandler dans le component UserForm pour annuler l'erreur overlay qui s'affiche */}
            <Button onClick={props.onConfirm}>Done</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default InputAlert;
