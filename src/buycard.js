import React from "react";
import "./icon.css";
function Buycard(props) {
  return (
    <div className="d-flex shadow-phase">
      <div class="card">
        <div class="inner-card ">
          {" "}
          <img src={props.url} class="img-fluid rounded" />
          <div class="d-flex justify-content-between align-items-center mt-3 px-2">
            <h6>{props.title} </h6>{" "}
            <span class="heart">
              <i class="fa fa-heart"></i>
            </span>
          </div>
          <div class="mt-2 px-2">
            {" "}
            <p>Age-{props.age}</p>
            <p>{props.category}</p>{" "}
          </div>
          <div class="px-2">
            <p style={{ color: "red" }}>
              {props.prize}
              {"/-  "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: "grey"
                }}
              >
                {props.originalprize}/-
              </span>
            </p>
            <p>Save{props.save}%</p>
          </div>{" "}
          <button
            class="btn btn-block px-3 col"
            style={{ backgroundColor: "#940000", color: "white" }}
          >
            Add to cart
          </button>{" "}
          <button
            class="btn btn-block px-3 col"
            style={{ backgroundColor: "#940000", color: "white" }}
          >
            Buy Now
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
export default Buycard;
