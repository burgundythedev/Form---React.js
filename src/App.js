import React, { useState } from "react";
import InputList from "./components/Users/InputList";
import UserForm from "./components/Users/UserForm";

function App(props) {
  // [array distructuring: premier element = etat present de l'element||deuxieme(setEntered)= permet de update l'etat]
  const [userData, setUserData] = useState([]);
  // fonction qui recupere l'etat precedent (...prevData = etat precedant une nouvelle entree)
  // de la liste rendu par le user ainsi que l'age le nom et cree une id(math.random().toString)
  const addUserDataList = (userName, userAge) => {
    // setUserData((prevData) => {
    //   //recuperation de data mise dans une array
    //   return [
    //     // spreadOperator= recupere les donnees existentes
    //     ...prevData,
    //     { name: userName, age: userAge, id: Math.random().toString() },
    //   ];
    // });

    setUserData((prevData) => {
      const updatedGoals = [...prevData];
      updatedGoals.unshift({
        name: userName,
        age: userAge,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (itemsId) => {
    setUserData((prevData) => {
      const updatedGoals = prevData.filter((item) => item.id !== itemsId);
      return updatedGoals;
    });
  };

  return (
    <div>
      {/* param onAddData={addUserDataList} permet de recuperer les inputs
      enregisterés dans le userForm (par props.onAddData dans userForm) ainsi que d'appliquer la fonction addUSerDataList au données recupérer */}
      <UserForm onAddData={addUserDataList} />
      {/* inputUsers={userData} affiche l'etat present de la liste d'input*/}
      {/* <InputList inputUsers={userData} /> */}
      {/* logique pour effacer un element de la liste */}
      {userData.length > 0 && (
        <InputList inputUsers={userData} onDeleteItem={deleteItemHandler} />
      )}
    </div>
  );
}

export default App;
