import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  initialSlide: 0,
  // nextArrow:<i className='material-icons md-24 md-dark">keyboard_arrow_right</i>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        initialSlide: 0
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
        initialSlide: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        initialSlide: 0
      }
    }
  ]
};
function Shopbyageelement(props) {
  return (
    <div className="col">
      <a href={props.location}>
        <img src={props.url} style={{ borderRadius: "50%", width: "150px" }} />
      </a>
    </div>
  );
}

function Shopbyage() {
  return (
    <div className="ml-4 mt-3 pt-5">
      <h4>Shop By age</h4>
      <br></br>
      <Slider {...settings}>
        <Shopbyageelement
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/AgeCarousel/mobile1.png"
          location="https://www.hamleys.in/toys-by-ages/0-11-months.html?product_list_order=high_to_low"
        />
        <Shopbyageelement
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/AgeCarousel/web2.png"
          location="https://www.hamleys.in/toys-by-ages/12-24-months.html"
        />
        <Shopbyageelement
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/AgeCarousel/web3.png"
          location="https://www.hamleys.in/toys-by-ages/3-4-years.html"
        />
        <Shopbyageelement
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/AgeCarousel/web4.png"
          location="https://www.hamleys.in/toys-by-ages/5-6-years.html"
        />
        <Shopbyageelement
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/AgeCarousel/web5.png"
          location="https://www.hamleys.in/toys-by-ages/7-9-years.html"
        />
        <Shopbyageelement
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/AgeCarousel/web6.png"
          location="https://www.hamleys.in/toys-by-ages/10-12-years.html"
        />
        <Shopbyageelement
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/AgeCarousel/web7.png"
          location="https://www.hamleys.in/toys-by-ages/13-years.html"
        />
      </Slider>
    </div>
  );
}

export default Shopbyage;
