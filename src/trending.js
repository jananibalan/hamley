import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./icon.css";
import Displaycard from "./displaycard";
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

function Trending() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4 className="myfont">Trending</h4>
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
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/cuddle_1612.jpg"
          location="https://www.hamleys.in/soft-toys.html"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/creativemind_1612.jpg"
          location="https://www.hamleys.in/catalog/category/view/s/role-pretend-play/id/3921/"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/stem_0101.jpg"
          location="https://www.hamleys.in/education-construction-toys/science-kits.html"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/HamleysBestsellers_0111.jpg"
          location="https://www.hamleys.in/hamleys-bestsellers.html"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/GetWheeledOut_0111.jpg"
          location="https://www.hamleys.in/sports-ride-ons/ride-ons.html"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/indoorsports_0101.jpg"
          location="https://www.hamleys.in/trending/indoor-games-sports.html"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/funtolearn_0101.jpg"
          location="https://www.hamleys.in/trending/fun-2-learn.html"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/remote_1612.jpg"
          location="https://www.hamleys.in/trending/remote-control-cars.html"
        />
        <Displaycard
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/bookworm_1612.jpg"
          location="https://www.hamleys.in/books-magazines.html"
        />
      </OwlCarousel>
    </div>
  );
}

export default Trending;
