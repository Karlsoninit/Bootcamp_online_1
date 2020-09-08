import React from "react";

export function Search({ getQuery }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    formData.forEach((value, name) => {
      getQuery(value);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
    </form>
  );
}
