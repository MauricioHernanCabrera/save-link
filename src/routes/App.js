import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Tags from "../pages/Tags";
import Links from "../pages/Links";
import CoreApp from "./../components/CoreApp";

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const App = () => {
  return (
    // <CoreApp>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/links" />

        <RouteWrapper exact path="/links" component={Links} layout={CoreApp} />
        <RouteWrapper exact path="/tags" component={Tags} layout={CoreApp} />
      </Switch>
    </BrowserRouter>
    // </CoreApp>
  );
};
export default App;
