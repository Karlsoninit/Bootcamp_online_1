import React from "react";

import { router } from "./router";

function App() {
  const routing = router(true);
  return <>{routing}</>;
}

export default App;
