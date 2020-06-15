import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Tags from "../pages/Tags";
import Links from "../pages/Links";
import SiteLayout from "./../components/SiteLayout";
import useEffectTitle from "./../hooks/useEffectTitle";

const RouteWrapper = ({
  component: Component,
  layout: Layout,
  title,
  ...rest
}) => {
  useEffectTitle(title);

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
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/links" />

        <RouteWrapper
          exact
          path="/links"
          component={Links}
          layout={SiteLayout}
          title="Links"
        />
        <RouteWrapper
          exact
          path="/tags"
          component={Tags}
          layout={SiteLayout}
          title="Tags"
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
