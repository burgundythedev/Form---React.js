import React, { useState } from "react";
import "./UserForm.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import InputAlert from "../UI/InputAlert";
//Component qui compose le form: mecanique principale -> recupere les datas de l'utilisateur
const UserForm = (props) => {
  // [array distructuring: premier element = etat present de l'element||deuxieme(setEntered)= permet de update l'etat]
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  // useState pour l'alerte overlay d'erreur Input(affichage ou pas)
  const [userError, setUserError] = useState();

  const onSubmitHandler = (event) => {
    //event.preventdefault() -> Permet d'eviter l'action par default d'etre executer.
    //Dans ce cas d'un Submit, empeche que une requete soit faite
    event.preventDefault();
    // condition = trim() saisie les espaces vides dans l'input et lenght comptent la longueur de l'input(condition qui permet de verifier si l'user a rempli correctement)
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setUserError({
        title: "Invalid Inputs",
        message: "Please enter a valid name & age (non-empty)",
      });
      return;
    }
    // condition = si l'age est inferieur a 1 -> erreur
    if (userAge < 1) {
      setUserError({
        title: "Age under 1",
        message: "Please enter a valid age (more than 0)",
      });
      return;
    }
    // props.onAddData = on fait remonter l'etat de userName et UserName via une fonction parametrer dans le fichier Apps(lifting state up)
    props.onAddData(userName, userAge);

    // Permet de remettre l'etat des inputs vierge ->suivi value={userName} dans l'elements
    setUserAge("");
    setUserName("");
  };

  const userNameHandler = (event) => {
    // event.target.value permet de recuperer les saisies de l'event(input de l'utilisateur...)
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = () => {
    //function qui permet d'annuler (null = etat annuler donc affichage de l'erreur annulée)l'overlay de l'alerte en cas de mauvais input
    setUserError(null);
  };

  return (
    <div>
      {/* si l'etat actuel des inputs est correct on garde notre page sans overlay d'erreur */}
      {userError && (
        // sinon on affiche le component InputAlert avec le message, le titre, ainsi que l'application de la fonction creer plus haut
        <InputAlert
          title={userError.title}
          message={userError.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="global-form">
        {/* param qui permet de ratacher la fonction onSubmitHandler a l'element */}
        <form onSubmit={onSubmitHandler}>
          <div className="input1">
            <label htmlFor="username">Name</label>
            {/* value={userName} récupere l'etat de l'input originale donc null pour permettre de remettre la barre d'entree de donnee vide */}
            <input type="text" value={userName} onChange={userNameHandler} />
            {/* onChange={userNameHandler} permet de parametrer la fonction de recuperation des données de l'input */}
          </div>
          <div className="input2">
            <label htmlFor="age">Age (Years)</label>
            <input type="number" value={userAge} onChange={userAgeHandler} />
          </div>
          <Button type="submit" />
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
