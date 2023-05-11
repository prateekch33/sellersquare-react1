import React, { useEffect, useState } from "react";

function SecondComponent() {
  const [name, setName] = useState("");
  const [greetings, setGreetings] = useState("");
  const [submitCheck, setSubmitCheck] = useState(false);
  useEffect(() => {
    if (name !== "" && submitCheck === true) {
      setGreetings(`Hello ${name}!! Hope you are fine.`);
      setSubmitCheck(false);
    }
  }, [name, submitCheck]);
  return (
    <div className="greetings">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit" onClick={() => setSubmitCheck(true)}>
          Get Message
        </button>        
      </form>
      <span>{greetings}</span>
    </div>
  );
}

export default SecondComponent;
