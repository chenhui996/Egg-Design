import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import IndexView from "./view/Home";
import View404 from "./view/View404";
import ButtonShow from "./components/Button/ButtonShow";
import AlertShow from "./components/Alert/AlertShow";
import MenuShow from "./components/Menu/MenuShow";
import TabsShow from "./components/Tabs/TabsShow";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <h1>Egg-Design Framework</h1>
        <Nav />
        <Switch>
          <Route path={["/", "/home", "/index"]} exact component={IndexView} />
          <Route path="/button" exact component={ButtonShow} />
          <Route path="/alert" exact component={AlertShow} />
          <Route path="/menu" exact component={MenuShow} />
          <Route path="/tabs" exact component={TabsShow} />
          <Route component={View404} />
        </Switch>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
