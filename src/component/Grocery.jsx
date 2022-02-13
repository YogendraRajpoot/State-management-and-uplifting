import "./Grocery.css";
import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput.jsx";
import { GroceryList } from "./GroceryList.jsx";

export const Grocery = () => {
  const [todolist, settodolist] = useState([]);
  return (
    
    <div className="container">
      <GroceryInput todolist={todolist} settodolist={settodolist} />
      console.log(todolist)
      <div className="right-box">
        <p>Display-List</p>
        <ul>
          {todolist.map((todo, value) => (
            <GroceryList value={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};
