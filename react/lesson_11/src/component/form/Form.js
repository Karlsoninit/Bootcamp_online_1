import React from "react";
import { useDispatch } from "react-redux";
import shortId from "shortid";
import { getFormValue } from "../../redux/actions";

function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements[0].value;
    console.log("value", value);
    dispatch(getFormValue({ todo: value, id: shortId() }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input />
    </form>
  );
}

export default Form;
