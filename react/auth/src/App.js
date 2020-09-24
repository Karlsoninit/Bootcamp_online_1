import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import logo from "./logo.svg";
import db from "./firebase/config";
import "./App.css";
import { useRouter } from "./router";
import { uploadProfileAction } from "./redux/actions";

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  db.auth().onAuthStateChanged((user) => {
    setUser(user);
    if (user) {
      const profile = {
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
      };
      dispatch(uploadProfileAction(profile));
    }
  });
  console.log("user", user);
  const routing = useRouter(user);
  return <>{routing}</>;
}

export default App;
