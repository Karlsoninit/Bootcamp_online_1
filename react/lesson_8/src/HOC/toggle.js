import React, { useState } from "react";

export function toggle(BaseComponent) {
  return function Toggle(props) {
    console.log("props", props);
    const [isVisible, setIsVisible] = useState(false);
    return (
      <>
        <h2>description</h2>
        <button onClick={() => setIsVisible((prev) => !prev)}>OPEN</button>
        {isVisible && <BaseComponent {...props} query="tesla" />}
      </>
    );
  };
}
