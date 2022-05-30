import Button from "./Button";
import styled from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styled.title}>Welcome back to React!! 🌱💚</h1>
      <Button text="thisisbutton" />
    </div>
  );
}

export default App;
