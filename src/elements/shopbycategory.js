import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { shopcat } from "../data/data";
var res = {
  0: {
    items: 1
  },
  450: {
    items: 2
  },
  600: {
    items: 2
  },
  1000: {
    items: 3
  },
  1200: {
    items: 5
  }
};

function Shopbycategoryelements(props) {
  return (
    <div className="col box-effect">
      <a href={props.location}>
        <img
          src={props.url}
          style={{ borderRadius: "2.5%", width: "250px", height: "250px" }}
          alt="..."
        />
      </a>
    </div>
  );
}
function Shopbycategory() {
  return (
    <div className="ml-4 mt-3 pt-5">
      <h4 className="myfont">Shop by Category</h4>
      <br></br>
      <OwlCarousel
        className="owl-theme nav-btn"
        loop={true}
        startPosition={5}
        slideBy={4}
        margin={20}
        nav={true}
        dots={false}
        autoplay={false}
        items={4}
        navText={[
          "<span class='material-icons md-36 mycolor myborder-left'>keyboard_arrow_down</span>",
          "<span class='material-icons md-36 mycolor myborder-right'>keyboard_arrow_down</span>"
        ]}
        responsive={res}
      >
        {shopcat.map((item, i) => {
          return (
            <Shopbycategoryelements
              url={item.url}
              location={item.location}
              key={i}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}
export default Shopbycategory;
