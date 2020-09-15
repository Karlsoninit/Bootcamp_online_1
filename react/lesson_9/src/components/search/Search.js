import React, { useState } from "react";
import { CustomInput } from "../../ui/CustomInput";
import { FireButton } from "../../ui/FireButton";

export function Search({ getSearchQuery }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    getSearchQuery(query);
  };
  const handleChange = ({ target: { name, value } }) => {
    setQuery(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CustomInput handleChange={handleChange} value={query} />
      <FireButton label="SEARCH" type="submit" />
    </form>
  );
}
