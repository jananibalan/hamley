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
function Featurebrandelements(props) {
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
function Featurebrand() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4>Featured brand</h4>
      <br></br>
      <Slider {...settings}>
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/lego_2108.jpg"
          location="https://www.hamleys.in/brand/lego.html"
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Rowan.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/lol_2711.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/barbie_2810_one.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/nerf2810_one.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/mg_bran_1812.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Fisherprice04122020.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Play-Doh_2810_one.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Hotwheels.jpg"
          location=""
        />
        <Featurebrandelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/mothercare_featured_1409.jpg"
          location=""
        />
      </Slider>
    </div>
  );
}

export default Featurebrand;
