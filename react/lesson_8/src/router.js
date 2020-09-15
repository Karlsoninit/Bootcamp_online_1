import React, { lazy, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import ToDo from "./components/todo/ToDo";
import Menu from "./components/menu/Menu";
import PageNotFound from "./components/pageNotFound/PageNotFound";

const HomeLazy = lazy(() =>
  import("./components/home/Home" /* webpackChunkName: "Home" */)
);
const ProfileLazy = lazy(() =>
  import("./components/profile/Profile" /* webpackChunkName: "Profile" */)
);

export function router(params) {
  return (
    <Suspense fallback={<h2>loader .....</h2>}>
      {params ? (
        <>
          <Switch>
            <Route exact path="/" component={HomeLazy} />
            <Route path="/profile" component={ProfileLazy} />
            <Route
              path="/menu"
              render={(props) => {
                console.log("props menu", props);
                return <Menu apiKey={"170f254648c146d1b4131a2ec576187a"} />;
              }}
            />
            <Route path="/todo">
              <ToDo apiKey={"0f98uryh3n4rbtg"} />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </>
      ) : (
        <h2>вам нужно пройти auth</h2>
      )}
    </Suspense>
  );
}
