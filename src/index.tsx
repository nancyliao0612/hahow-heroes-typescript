import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import HeroList from "./pages/HeroList";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/heroes">
        <HeroList />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
