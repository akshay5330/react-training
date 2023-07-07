import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandelr = (uName, uAge) => {
    setUsersList((preUserData) => {
      return [...preUserData, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandelr} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
