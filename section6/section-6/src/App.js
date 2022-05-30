import { useState, useEffect } from "react";

function Hello() {
  function destroyedFn() {
    console.log("I'm destroyed");
  }
  function effectFn() {
    console.log("I'm created!");
    return destroyedFn;
  }
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((current) => !current);
  };

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
