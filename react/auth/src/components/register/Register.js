import React, { useState } from "react";
import BasicTextFields from "../../ui/BasicTextFields";
import db from "../../firebase/config";

export const Register = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUserWithEmailAndPassword = async ({
    email,
    password,
    nickname,
  }) => {
    await db.auth().createUserWithEmailAndPassword(email, password);
    const user = await db.auth().currentUser;
    user.updateProfile({
      displayName: nickname,
    });
    console.log("user", user);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userInfo = { nickname, email, password };
    createUserWithEmailAndPassword(userInfo);

    setNickname("");
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <BasicTextFields
        value={nickname}
        name={"nickname"}
        label={"Nickname"}
        handleChange={setNickname}
      />
      <BasicTextFields
        value={email}
        name={"email"}
        label={"Email"}
        handleChange={setEmail}
      />
      <BasicTextFields
        value={password}
        name={"password"}
        label={"Password"}
        handleChange={setPassword}
      />
      <button>register</button>
    </form>
  );
};

// store = {
//   profile: {
//     displayName: "",
//     uid: "",
//     email: "",
//   },
// };
