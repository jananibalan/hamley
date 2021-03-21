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
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/lego_2108.jpg"
          location="https://www.hamleys.in/brand/lego.html"
          title="LEGO"
          content="Only the best is good enough"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Rowan.jpg"
          location="https://www.hamleys.in/brand/rowan.html"
          title="ROWAN"
          content="Loads of happiness in store"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/lol_2711.jpg"
          location="https://www.hamleys.in/brand/lol-surprise.html"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/barbie_2810_one.jpg"
          location="https://www.hamleys.in/brand/barbie-buy-baby-dolls-toy-sets-online-hamleys-india.html"
          title="Barbie"
          content="You Can Be Anything"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/nerf2810_one.jpg"
          location="https://www.hamleys.in/brand/nerf.html"
          title="NERF"
          content="It's Nerf or nothin?"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/mg_bran_1812.jpg"
          location="https://www.hamleys.in/brand/mattel.html"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Fisherprice04122020.jpg"
          location="https://www.hamleys.in/baby-fair.html"
          title="Fisher-Price"
          content="Development and Learning through Play"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Play-Doh_2810_one.jpg"
          location="https://www.hamleys.in/brand/playdoh.html"
          title="Play-Doh"
          content="Squash it,twist it,mould it"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Hotwheels.jpg"
          location="https://www.hamleys.in/brand/hot-wheels.html"
          title="Hotwheels"
          content="Get into the driver's seat"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/mothercare_featured_1409.jpg"
          location="https://www.hamleys.in/brand/mothercare.html"
          title="mothercare"
          content="strollers,toiletries,& baby essentials"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/X-Shot_2807.jpg"
          location="https://www.hamleys.in/brand/x-shot.html"
          title="X-Shot"
          content="Up the game!"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Winfun.jpg"
          location="https://www.hamleys.in/brand/winfun.html"
          title="Winfun"
          content="Play starts with small steps"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Melissa_2807.jpg"
          location="https://www.hamleys.in/brand/melissa-doug.html"
          title="Mellisa and Doug"
          content="Power of play!"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Teamsterz_Logo_2807.jpg"
          location="https://www.hamleys.in/brand/teamsterz.html"
          title="Teamsterz"
          content="Ready to zoom!"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Chicco_2807.jpg"
          location="https://www.hamleys.in/brand/chicco.html"
          title="Chicco"
          content="Growing up is a wonderful journey!"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Fuzzbuzz_2807.jpg"
          location="https://www.hamleys.in/brand/fuzzbuzz.html"
          title="Fuzzbuzz"
          content="Meet your furry friends"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Marvel.jpg"
          location="https://www.hamleys.in/brand/marvel.html"
          title="Marvel"
          content="Unleash your super power"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Rainbowcorns_2807.jpg"
          location="https://www.hamleys.in/brand/rainbocorns.html"
          title="Rainbocorns"
          content="Adorable sequin surprise"
        />
        <Displaycard2
          url="https://www.hamleys.in/media/wysiwyg/Hamleys/Main_content_img/BrandBanners/Kids_2807.jpg"
          location="https://www.hamleys.in/brand/k-s-kids.html"
          title="K's Kids"
          content="Physical,cognitive & social development"
        />
      </OwlCarousel>
    </div>
  );
}

export default Featurebrand;
