import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { shopage } from "../data/data";
var res = {
  0: {
    items: 1
  },
  450: {
    items: 3
  },
  600: {
    items: 4
  },
  1000: {
    items: 6
  },
  1400: {
    items: 7
  }
};

function Shopbyageelement(props) {
  return (
    <div className="col">
      <a href={props.location}>
        <img
          src={props.url}
          style={{ borderRadius: "50%", width: "150px" }}
          alt="..."
        />
      </a>
    </div>
  );
}

function Shopbyage() {
  return (
    <div className="ml-4 mt-3 pt-5">
      <h4 className="myfont">Shop by age</h4>
      <br></br>
      <OwlCarousel
        className="owl-theme"
        loop={false}
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
        {shopage.map((item, i) => {
          return (
            <Shopbyageelement url={item.url} location={item.location} key={i} />
          );
        })}
        <br></br>
      </OwlCarousel>
    </div>
  );
}

export default Shopbyage;
