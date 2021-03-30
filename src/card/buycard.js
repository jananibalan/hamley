import React from "react";
function Buycard(props) {
  return (
    <div
      className="d-flex box-effect"
      style={{ width: "18rem", height: "100%" }}
    >
      <div className="card">
        <div className="inner-card card-inside-text">
          {" "}
          <img src={props.url} className="img-fluid rounded" alt="" />
          <div className="d-flex justify-content-between align-items-center mt-3 px-2">
            <h6 style={{ fontWeight: "bold" }}>{props.title} </h6>{" "}
            <span className="heart">
              <i className="fa fa-heart"></i>
            </span>
          </div>
          <div className="mt-2 px-2">
            {" "}
            <p>Age-{props.age}</p>
            <p>{props.category}</p>{" "}
          </div>
          <div className="px-2 myf-2">
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
            className="btn btn-block px-3 col"
            style={{ backgroundColor: "#940000", color: "white" }}
          >
            Add to cart
          </button>{" "}
          <button
            className="btn btn-block px-3 col"
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
