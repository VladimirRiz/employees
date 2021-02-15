import NavBar from "./navbar";
import Main from "./mainPage";
import Employees from "./employees";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/employees">
          <Employees />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
