import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./icon.css";
import Buycard from "./buycard";
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
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491635758-1.jpg"
          title="Chaos Orbit Blaster With 24 Da..."
          age="14Y+"
          category="Collectibles & Toys Guns"
          prize="2,339"
          originalprize="2,599"
          save=" 10"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902371-1.jpg"
          title="Sparkle Girlz Fashion Doll Wit..."
          age="3Y+"
          category="Dolls & Playsets"
          prize="1,419"
          originalprize="1,499"
          save=" 5"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902608-1.jpg"
          title="Zuru Max Build More Accessorie..."
          age="3Y+"
          category="Education & Constructi..."
          prize="1,419"
          originalprize="1,499"
          save=" 5"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902263-1.jpg"
          title="DiiCii Knock Out Novelty Dice ..."
          age="5Y+"
          category="Games & Puzzles"
          prize="899"
          originalprize=""
          save=" "
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491636278-1.jpg"
          title="Lego 31101 Monster Truck"
          age="7Y+"
          category="Education & Constructi..."
          prize="1,379"
          originalprize="1,599"
          save=" 14"
        />

        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490375-1.jpg"
          title="Zuru Coco Plush Scoops Series ..."
          age="3Y+"
          category="Soft Toys"
          prize="369"
          originalprize="499"
          save=" 26"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490348-1.jpg"
          title="Zuru 5 Surprise Miniature Toy ..."
          age="3Y+"
          category="Collectibles & Toys Guns"
          prize="599"
          originalprize="799"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491373981.jpg"
          title="Playshifu Orboot - The Educati..."
          age="4Y+"
          category="Education & Constructi..."
          prize="1,999"
          originalprize=""
          save=" "
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567577.jpg"
          title="Pets Alive Boppi Llama-White"
          age="2Y+"
          category="Soft Toys"
          prize="1,999"
          originalprize="2,499"
          save=" 20"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490350_1.jpg"
          title="Zuru A Magical Unicorn Surpris..."
          age="3Y+"
          category="Collectibles & Toys Guns"
          prize="675"
          originalprize="899"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567580.jpg"
          title="Zuru Oosh Cotton Candy"
          age="3Y+"
          category="Education & Constructi..."
          prize="449"
          originalprize="599"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567581.jpg"
          title="Zuru Oosh Cotton Candy Cuties"
          age="3Y+"
          category="Education & Constructi..."
          prize="769"
          originalprize="1,099"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567656.jpg"
          title="Zuru Bunch O Balloons Party Ba..."
          age="3Y+"
          category="Impulse & Novelty Toys"
          prize="1,719"
          originalprize="2,299"
          save=" 25"
        />
      </OwlCarousel>
    </div>
  );
}

export default Newarrival;
