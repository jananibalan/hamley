import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./icon.css";
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
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491489816_0103.png"
            location="https://www.hamleys.in/miko-2-my-companion-robot-red-491489816.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491396198_0103.PNG"
            location="https://www.hamleys.in/national-geographic-super-slime-and-putty-lab-491396198.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491603929_one_0103.png"
            location="https://www.hamleys.in/2-in-1-magic-jam-playmat-491603929.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491603814_0103.png"
            location="https://www.hamleys.in/rotating-musical-bee-catcher-game-42-bees-and-4-magnectic-rods-491603814.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491603722_0103.png"
            location="https://www.hamleys.in/nerf-fortnite-ts-blaster-pump-action-dart-blaster-491603722.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491568474_0103.png"
            location="https://www.hamleys.in/disney-frozen-2-snow-globe-surprise-491568474.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491396374_0103.png"
            location="https://www.hamleys.in/go-discover-smart-chart-interactive-learning-series-491396374.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491568401_0103.png"
            location="https://www.hamleys.in/rainbocorns-series-2-sequin-surprise-491568401.html"
          />
          <Bestsellerelement
            url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/ToyOfMonth/491394175_0103.png"
            location="https://www.hamleys.in/winfun-magic-lights-musical-play-gym-white-491394175.html"
          />
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
            <Lineelement
              text="E MIKO 2RED"
              prize="23749"
              location="https://www.hamleys.in/miko-2-my-companion-robot-red-491489816.html"
            />
            <Lineelement
              text="NE NAT GEO Super Slime and Putty"
              prize="1649"
              location="https://www.hamleys.in/national-geographic-super-slime-and-putty-lab-491396198.html"
            />
            <Lineelement
              text="E 2 IN MUSIC JAM PLAYMAT"
              prize="2599"
              location="https://www.hamleys.in/2-in-1-magic-jam-playmat-491603929.html"
            />
            <Lineelement
              text="E Sirius Toys Bee Catcher"
              prize="1099"
              location="https://www.hamleys.in/rotating-musical-bee-catcher-game-42-bees-and-4-magnectic-rods-491603814.html"
            />
            <Lineelement
              text="Nerf Fortnite,Pump Action Dart Blaster"
              prize="3631"
              location="https://www.hamleys.in/nerf-fortnite-ts-blaster-pump-action-dart-blaster-491603722.html"
            />
            <Lineelement
              text="NE SNOW GLOBE SURPRISE FROZEN2"
              prize="599"
              location="https://www.hamleys.in/disney-frozen-2-snow-globe-surprise-491568474.html"
            />
            <Lineelement
              text="E PW SMART INTERACTIVE CHART"
              prize="4679"
              location="https://www.hamleys.in/go-discover-smart-chart-interactive-learning-series-491396374.html"
            />
            <Lineelement
              text="NE RAINBOCORNS S2"
              prize="1869"
              location="https://www.hamleys.in/rainbocorns-series-2-sequin-surprise-491568401.html"
            />
            <Lineelement
              text="E Winfun Magic Lights Musical Play Gym"
              prize="3399"
              location="https://www.hamleys.in/winfun-magic-lights-musical-play-gym-white-491394175.html"
            />
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
export default Bestseller;
