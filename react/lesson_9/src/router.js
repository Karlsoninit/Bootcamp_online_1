import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const NewsLazy = lazy(() =>
  import("./components/news/News" /* webpackChunkName: "News" */)
);
const ArticleLazy = lazy(() =>
  import("./components/article/Article" /* webpackChunkName: "Article" */)
);

export function router(params) {
  return (
    <Suspense fallback={<h2>loader .....</h2>}>
      <Switch>
        <Route exact path="/news">
          <NewsLazy />
        </Route>
        <Route path="/news/:articleId">
          <ArticleLazy />
        </Route>
      </Switch>
    </Suspense>
  );
}
