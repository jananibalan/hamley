import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { shopchar } from "../data/data";
var res = {
  0: {
    items: 2
  },
  450: {
    items: 3
  },
  600: {
    items: 4
  },
  1000: {
    items: 5
  },
  1200: {
    items: 7
  }
};

function Shopbycharacterelements(props) {
  return (
    <div className="justify-content-center">
      <div style={{ borderRadius: "50%", border: "1px solid brown" }}>
        <a href={props.location}>
          <img
            src={props.url}
            style={{
              width: "150px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0",
              marginBottom: "0",
              padding: "0",
              bottom: "0"
            }}
            alt="..."
            className="moveup"
          />
        </a>
      </div>
      <h6 className="text-center card-inside-text">{props.title}</h6>
    </div>
  );
}
function Shopbycharacter() {
  return (
    <div className="ml-4 mt-3 pt-5">
      <h4 className="myfont">Shop by character</h4>
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
        {shopchar.map((item, i) => {
          return (
            <Shopbycharacterelements
              url={item.url}
              location={item.location}
              title={item.title}
              key={i}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}
export default Shopbycharacter;
