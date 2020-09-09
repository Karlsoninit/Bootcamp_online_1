import React, { useState } from "react";
import { CustomInput } from "../../ui/CustomInput";
import { FireButton } from "../../ui/FireButton";
import { sendData, getData } from "../../requests";

export function Form({ uploadData }) {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitForm = async (evt) => {
    evt.preventDefault();
    await sendData({ todo, description });
    const data = await getData();
    uploadData(data);
    setTodo("");
    setDescription("");
  };
  const click = () => {
    console.log("double click");
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <CustomInput
        name="todo"
        handleChange={({ target: { value } }) => setTodo(value)}
        value={todo}
      />
      <CustomInput
        name="description"
        handleChange={({ target: { value } }) => setDescription(value)}
        value={description}
      />
      <FireButton label="SEND" type="submit" handleClick={click} />
    </form>
  );
}
