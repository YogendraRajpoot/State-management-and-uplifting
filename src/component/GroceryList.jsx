import React, { useState } from "react";
// import styles from "./Stk.css";
// import styles from "./Todo.module.css"

export const GroceryList = ({ value }) => {
  const DLT = (e) =>{
    console.log(e.target.parentNode.remove());
}
  return (
    <li>
      {/* {console.log("value:-",value)}; */}
      <button  onClick={DLT} >Delete</button>
      <span>{value}</span>
    </li>
  );
};
