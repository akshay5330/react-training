// import React from "react";

// import Ingredients from "./components/Ingredients/Ingredients";

// const App = props => {
//   return <Ingredients />;
// };

// using yii2

import React, { useEffect, useState } from "react";
import "./table.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(
        "http://localhost/basic/web/products/get-product"
      );
      const resData = await response.json();
      setUsers(resData.data);
    }
    fetchUserData();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="table">
            <div className="table-header">
              <div className="header__item">
                <title id="name" className="filter__link"> Name</title>
              </div>
              <div className="header__item">
                <title id="wins" className="filter__link filter__link--number"> Price</title>
              </div>
              <div className="header__item">
                <title id="draws" className="filter__link filter__link--number"> Quantity</title>
              </div>
            </div>
            {users.length > 0 &&
              users.map((user) => (
                <div className="table-content">
                  <div className="table-row">
                    <div className="table-data">{user.name}</div>
                    <div className="table-data">{user.price}</div>
                    <div className="table-data">{user.quantity}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
