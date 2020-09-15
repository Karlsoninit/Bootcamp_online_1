import React from "react";
import TextField from "@material-ui/core/TextField";

export function CustomInput({ name, handleChange, value }) {
  return (
    <TextField
      id="outlined-search"
      label={name}
      type="search"
      variant="outlined"
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
}
