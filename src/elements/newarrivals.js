import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Buycard from "../card/buycard";
import { news1 } from "../data/data";
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
    items: 4
  }
};

function Newarrival() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4 className="myfont">New arrivals</h4>
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
        {news1.map((item, i) => {
          return (
            <Buycard
              url={item.url}
              title={item.age}
              age={item.age}
              category={item.category}
              prize={item.prize}
              originalprize={item.originalprize}
              save="27"
              key={i}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Newarrival;
