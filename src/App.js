import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [number, setNumber] = useState(0);
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState([""]);

  const decreaseHandler = () => {
    setNumber((prevState) => prevState - 1);
  };
  const increaseHandler = () => {
    setNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  const ChangeInputValue = (e) => {
    setInput(e.target.value);
  };
  const filteredItems = [
    ...users.filter((item) => item.name.toLowerCase.includes(input)),
  ];
  return (
    <div className="App">
      <div>
        <div>
          <h1>Counter</h1>
    <h1>This is awesome</h1> 
    <h1>This is not right</h1>
          <h2> {number}</h2>

          <button onClick={decreaseHandler} className="btn btn-primary">
            Decrease
          </button>

          <button onClick={increaseHandler} className="btn btn-primary">
            Increase
          </button>
        </div>
        <input value={input} type="text" onChange={ChangeInputValue} />
        {filteredItems.map((user) => (
          <p id={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
