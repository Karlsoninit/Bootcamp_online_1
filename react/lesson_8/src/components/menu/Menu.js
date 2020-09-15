import React from "react";
import { fetcher } from "../../HOC/fetcher";
import withCustomHistory from "../../HOC/withCustomHistory";
import { withRouter } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      <h2>Menu</h2>
      <button onClick={() => props.history.push("/")}>go home ...</button>
    </>
  );
};

export default withRouter(fetcher(Menu));
