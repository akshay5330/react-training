import React from "react";

import Ingredients from "./components/Ingredients/Ingredients";

const App = props => {
  return <Ingredients />;
};

//using yii2
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUserData = () => {
//     fetch("http://localhost/basic/web/products/list-product", {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//       });
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   console.log(users)
//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <ul> Name : {user.name}</ul>
//               <ul> Price : {user.price}</ul>
//               <ul> Quantity : {user.quantity}</ul>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

export default App;
