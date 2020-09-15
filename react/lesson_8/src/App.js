import React, { lazy, Suspense } from "react";
import { Nav } from "./components/nav/Nav";
import { router } from "./router";

function App() {
  const routing = router(false);
  return (
    <>
      <Nav />
      {routing}
    </>
  );
}

export default App;
