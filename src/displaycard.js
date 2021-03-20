import React from "react";
function Displaycard(props) {
  return (
    <div className="col">
      <a href={props.location}>
        <img
          src={props.url}
          style={{ height: "450px", borderRadius: "3.5%", width: "250px" }}
          alt=".."
        />
      </a>
    </div>
  );
}
export default Displaycard;
