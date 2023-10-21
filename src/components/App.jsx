import React from "react";
import { useState } from "react";
// import Bullet from "./Bullet";

function App() {
  const [text, Settext] = useState("");
  const [items, Setitems] = useState([]);

  function handlechange(event) {
    let value = event.target.value;
    Settext(value);
    console.log("value updated"); // to see is the value is currently working or not ;
  }

  function handleclick() {
    //perform something that will add these items to the bullet points
    // console.log("value of add is" + add);
    Setitems((preval) => {
      return [...preval, text];
    });
    // at end make the item value null
    Settext("");
  }

  // function list() {
  //   items.map((addeditem) => {
  //     return <li>addeditem</li>;
  //   });
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={text} onChange={handlechange} />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((additem) => (
            <li>{additem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//use effect
