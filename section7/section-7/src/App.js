import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
 
  return <Router>
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route path="/movie" component={() => <Detail />} />
    </Switch>
  </Router>
}

export default App;
