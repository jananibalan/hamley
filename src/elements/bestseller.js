import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { element1, element2 } from "../data/data";
var res = {
  0: {
    items: 1
  },
  450: {
    items: 1
  },
  600: {
    items: 2
  },
  1000: {
    items: 3
  },
  1400: {
    items: 3
  }
};

function Bestsellerelement(props) {
  return (
    <div className="col">
      <a href={props.location}>
        <img src={props.url} alt="" />
      </a>
    </div>
  );
}
function Lineelement(props) {
  return (
    <h4
      className="text-center text-white card-inside-text"
      style={{ fontSize: "20px", fontWeight: "bold" }}
    >
      <a
        href={props.location}
        style={{ textDecoration: "none", color: "white" }}
      >
        {props.text}
      </a>
      <br></br>
      <a
        href={props.location}
        style={{ textDecoration: "none", color: "white" }}
      >
        &#8377;{props.prize}/-
      </a>
    </h4>
  );
}
function Bestseller() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4 className="myfont">Hamley's Bestseller</h4>
      <br></br>

      <div
        style={{
          width: "100%",
          margin: "0",
          background:
            "url('https://www.hamleys.in/static/version1612899424/frontend/Embitel/Hamleys/en_US/images/BannerBttomShape.png') no-repeat center center"
        }}
      >
        <OwlCarousel
          className="owl-theme nav-btn"
          loop={true}
          startPosition={5}
          slideBy={3}
          margin={0}
          nav={false}
          dots={false}
          autoplay={true}
          items={3}
          responsive={res}
        >
          {element1.map((item, i) => {
            return (
              <Bestsellerelement
                url={item.url}
                location={item.location}
                key={i}
              />
            );
          })}
        </OwlCarousel>
        <div
          style={{
            width: "100%",
            margin: "0"
          }}
          className="line-color"
        >
          <OwlCarousel
            className="owl-theme nav-btn"
            loop={true}
            startPosition={5}
            slideBy={3}
            margin={0}
            nav={false}
            dots={false}
            autoplay={true}
            items={3}
            responsive={res}
          >
            {element2.map((item, i) => {
              return (
                <Lineelement
                  text={item.text}
                  prize={item.prize}
                  location={item.location}
                  key={i}
                />
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
export default Bestseller;
