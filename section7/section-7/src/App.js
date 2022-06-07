import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setTodo("");
  };
  return (
    <div>
      <h1>My ToDos : ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          text="text"
          placeholder="Write your todo..."
        />
        <button>Add To Do</button>
      </form>
      {toDos.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
}

export default App;