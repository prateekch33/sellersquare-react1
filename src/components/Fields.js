import React from "react";

function Fields(props) {
  return (
    <div className="fields">
      <div className="field">{props.name}</div>
      <div className="field">{props.email}</div>
    </div>
  );
}

export default Fields;
