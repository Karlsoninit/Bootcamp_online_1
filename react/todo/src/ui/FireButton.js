import React from "react";

import Button from "@material-ui/core/Button";

export function FireButton({
  label,
  type,
  handleClick = () => {
    console.log("empty click");
  },
}) {
  return (
    <Button
      variant="outlined"
      color="secondary"
      type={type}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
}
