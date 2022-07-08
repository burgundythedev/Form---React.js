import React from "react";
import Card from "../UI/Card";
import "./InputList.css";
import UserItems from "./UserItems";
// Sert a fetch les datas de l'utilisateur
const InputList = (props) => {
  return (
    <Card className="users">
      <ul>
        {/* props.inputUsers.map() permet de output en liste (<li>) les donnees grace à props.inputUsers et map(permet de render conditionelement notre data inputUser en jsx)*/}
        {props.inputUsers.map((inputs) => (
          // key={} creation d'un id logique/output du nom et age de chaques elements
          <UserItems
            key={inputs.id}
            id={inputs.id}
            onDelete={props.onDeleteItem}
          >
            <p>{inputs.name}</p>
            <p>({inputs.age} Years Old)</p>
          </UserItems>
        ))}
      </ul>
    </Card>
  );
};

export default InputList;
