import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./icon.css";
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
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/Peppapig_2810.png"
          location="https://www.hamleys.in/brand/peppa-pig.html?product_list_order=high_to_low"
          title="Peppa Pig"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/PawPatrol_2810.png"
          location="https://www.hamleys.in/brand/paw-patrol.html?product_list_order=low_to_high"
          title="Paw Patrol"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/Barbie_2810.png"
          location="https://www.hamleys.in/brand/barbie-buy-baby-dolls-toy-sets-online-hamleys-india.html"
          title="Barbie"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/Avengers_2810.png"
          location="https://www.hamleys.in/brand/avengers.html?product_list_order=high_to_low"
          title="Avengers"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/DisneyPrincess_2810.png"
          location="https://www.hamleys.in/brand/disney-princess.html?product_list_order=high_to_low"
          title="Disney Princess"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/Frozen_2810.png"
          location="https://www.hamleys.in/brand/disney-frozen.html?product_list_order=high_to_low"
          title="Disney Frozen"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/Spiderman_2810.png"
          location="https://www.hamleys.in/brand/spiderman.html?product_list_order=high_to_low"
          title="Spider Man"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/PjMask_2810.png"
          location="https://www.hamleys.in/brand/pj-mask.html?product_list_order=high_to_low"
          title="PJ mask"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/HarryPotter_2810.png"
          location="https://www.hamleys.in/brand/harry-potter.html?product_list_order=high_to_low"
          title="Harry Potter"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/MickeyMouseClubhouse_2810.png"
          location="https://www.hamleys.in/brand/mickey-mouse.html"
          title="Mickey Mouse"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/MashaandTheBear_2810.png"
          location="https://www.hamleys.in/brand/masha-and-the-bear.html"
          title="Masha and the bear"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/MyLittlePony_2810.png"
          location="https://www.hamleys.in/brand/my-little-pony.html"
          title="My Little Pony"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/WWE_2810.png"
          location="https://www.hamleys.in/brand/wwe.html?product_list_order=high_to_low"
          title="WWE"
        />
        <Shopbycharacterelements
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/Characters/Transformers_2810.png"
          location="https://www.hamleys.in/brand/transformers.html"
          title="Transformers"
        />
      </OwlCarousel>
    </div>
  );
}
export default Shopbycharacter;
