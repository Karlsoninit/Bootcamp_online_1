import React from "react";
import db from "../../firebase/config";

export const Home = () => {
  const signOut = async () => {
    const signOutData = await db.auth().signOut();
    console.log("signOutData", signOutData);
  };
  return (
    <>
      <h2>HOME</h2>
      <button onClick={signOut}>signOut</button>
    </>
  );
};
