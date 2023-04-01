import "./App.css";
import { useState } from "react";

import InputCard from "./InputCard";
import DisplayCard from "./DisplayCard";

function App() {
  // Initialize state
  const [users, setState] = useState([
    { id: 1, name: "Joe", age: 34 },
    { id: 2, name: "Jane", age: 29 },
  ]);

  const addNewUser = (newUser) => {
    setState((prevState) => [...prevState, newUser]);
  };

  return (
    <div className="App">
      <InputCard addNewUser={addNewUser} />
      <DisplayCard users={users} />
    </div>
  );
}

export default App;
