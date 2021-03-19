import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        initialSlide: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
        initialSlide: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        initialSlide: 4
      }
    }
  ]
};
function Trendingelements(props) {
  return (
    <div className="col">
      <a href={props.location}>
        <img
          src={props.url}
          style={{ height: "450px", borderRadius: "3.5%", width: "250px" }}
        />
      </a>
    </div>
  );
}
function Trending() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4>Trending</h4>
      <br></br>
      <Slider {...settings}>
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/cuddle_1612.jpg"
          location="https://www.hamleys.in/soft-toys.html"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/creativemind_1612.jpg"
          location="https://www.hamleys.in/catalog/category/view/s/role-pretend-play/id/3921/"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/stem_0101.jpg"
          location="https://www.hamleys.in/education-construction-toys/science-kits.html"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/HamleysBestsellers_0111.jpg"
          location="https://www.hamleys.in/hamleys-bestsellers.html"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/GetWheeledOut_0111.jpg"
          location="https://www.hamleys.in/sports-ride-ons/ride-ons.html"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/indoorsports_0101.jpg"
          location="https://www.hamleys.in/trending/indoor-games-sports.html"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/funtolearn_0101.jpg"
          location="https://www.hamleys.in/trending/fun-2-learn.html"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/remote_1612.jpg"
          location="https://www.hamleys.in/trending/remote-control-cars.html"
        />
        <Trendingelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Trending/bookworm_1612.jpg"
          location="https://www.hamleys.in/books-magazines.html"
        />
      </Slider>
    </div>
  );
}

export default Trending;
