import React from "react";
import { useHistory } from "react-router-dom";

export function withCustomHistory(Base) {
  return function WithCustomHistory(props) {
    const history = useHistory();
    return <Base {...props} history={history} />;
  };
}
export default withCustomHistory;
