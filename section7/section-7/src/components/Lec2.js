import { useState } from "react";

const Lec2 = () => {
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
      <h4>Lec2</h4>
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
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lec2;
