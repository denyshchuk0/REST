import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
// Connect redux to react
import store from "./store";
import { Provider } from "react-redux";

// CharacterList component
import CharacterList from "./Components/CharacterList/CharacterList";
import AddCharacter from "./Components/AddCharacter/addCharacter";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import { createBrowserHistory } from "history";

// For Hoc
import { ApiStoreServiceProvider } from "./Components/api-service-context/api-service-context";
import ApiStoreService from "./Services/api-service";
import UpdateCharacter from "./Components/UpdateCharacter/UpdateCharacter";
const apiStoreService = new ApiStoreService();

export const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <ApiStoreServiceProvider value={apiStoreService}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={CharacterList} />
            <Route path="/add" exact component={AddCharacter} />
            <Route path="/update/:id" exact component={UpdateCharacter} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </ApiStoreServiceProvider>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
