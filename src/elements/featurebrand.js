import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Displaycard from "../card/displaycard";
import { feat } from "../data/data";
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
  1200: {
    items: 5
  }
};

function Displaycard2(props) {
  return (
    <div>
      <Displaycard {...props} />
      <div
        style={{
          bottom: "0",
          left: "30px",
          position: "absolute",
          color: "white",
          fontSize: "12px"
        }}
        className="card-inside-text"
      >
        <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
        <small>{props.content}</small>
      </div>
    </div>
  );
}
function Featurebrand() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4 className="myfont">Featured brands</h4>
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
        {feat.map((item, i) => {
          return (
            <Displaycard2
              url={item.url}
              title={item.title}
              location={item.location}
              content={item.content}
              key={i}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Featurebrand;
