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
    <div className="col">
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
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/1_1009.jpg"
          location="https://www.hamleys.in/soft-toys.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/9_1009.jpg"
          location="https://www.hamleys.in/collectibles-toy-guns/action-figures-playsets.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/7_1009.jpg"
          location="https://www.hamleys.in/education-construction-toys.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/13_1009.jpg"
          location="https://www.hamleys.in/impulse-novelty-toys.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/2_1009.jpg"
          location="https://www.hamleys.in/dolls-fashion.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/3_1009.jpg"
          location="https://www.hamleys.in/infant-pre-school.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/8_1009.jpg"
          location="https://www.hamleys.in/games-puzzles.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/11_1009.jpg"
          location="https://www.hamleys.in/sports-ride-ons.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/12_1009.jpg"
          location="https://www.hamleys.in/vehicles-tracksets-remote-control-toys.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/4_1009.jpg"
          location="https://www.hamleys.in/arts-crafts.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/5_1009.jpg"
          location="https://www.hamleys.in/school-supplies-bags.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/6_1009.jpg"
          location="https://www.hamleys.in/collectibles-toy-guns/toy-guns.html"
        />
        <Shopbycategoryelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Categories/10_1009.jpg"
          location="https://www.hamleys.in/catalog/category/view/s/role-pretend-play/id/3921/"
        />
      </OwlCarousel>
    </div>
  );
}
export default Shopbycategory;
