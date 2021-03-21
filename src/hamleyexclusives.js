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

function Hamleyexclusive() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4 className="myfont">Hamley's exclusive</h4>
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
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491603944-1.jpg"
          title="Hamleys Atv Football Red"
          age="1Y+"
          category="Sports & ride Ons"
          prize="1,119"
          originalprize="1,499"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490292-1.jpg"
          title="Hamleys Bear Guardsman Keyring"
          age="12M+"
          category="Soft Toys"
          prize="559"
          originalprize="699"
          save=" 20"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491173144-1.jpg"
          title="Hamleys M And S Ziggles Soft T..."
          age="2Y+"
          category="Soft Toys"
          prize="1,299"
          originalprize="1,499"
          save=" 13"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491568787-1.jpg"
          title="Hamleys Baby Ellie Soft Doll W..."
          age="3Y+"
          category="Dolls & Fashion"
          prize="1,819"
          originalprize="2,599"
          save=" 30"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491173226-1.jpg"
          title="Hamleys Snazzy Sticker Scratch..."
          age="4Y+"
          category="Arts & Crafts"
          prize="999"
          originalprize=""
          save=" "
        />

        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490265.jpg"
          title="Hamleys Blow In The Dark Actio..."
          age="3Y+"
          category="Vehicles, Tracksets & R..."
          prize="1,019"
          originalprize="1,499"
          save=" 32"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491603306-1.jpg"
          title="Marvin Magic Mind Blowing 30 M..."
          age="8Y+"
          category="Education & Constructi..."
          prize="899"
          originalprize="1,199"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/490619244-1.jpg"
          title="Hamleys Hand Gliders Plane Act..."
          age="3Y+"
          category="Games & Puzzles"
          prize="449"
          originalprize="499"
          save=" 10"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490304-1.jpg"
          title="Hamleys Travel Mug"
          age="5Y+"
          category="Impulse & Novelty Toys"
          prize="549"
          originalprize="799"
          save=" 30"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/490618891-1.jpg"
          title="Hamleys Rockin Rabbit"
          age="3Y+"
          category="Soft Toys"
          prize="1,359"
          originalprize="1,599"
          save=" 15"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/490619073.jpg"
          title="Hamleys Rota-Copter With Searc..."
          age="3Y+"
          category="Impulse & Novelty Toys"
          prize="949"
          originalprize="999"
          save=" 5"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/490618848-1.jpg"
          title="Hamleys Double Magic Marker Pe..."
          age="3Y+"
          category="School Supplies & Bags"
          prize="699"
          originalprize="799"
          save=" 13"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491129350-1.jpg"
          title="Hamleys Street Gliders Blue"
          age="5Y+"
          category="Sports & Ride Ons"
          prize="1,399"
          originalprize="1,999"
          save=" 30"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/490619245-1.jpg"
          title="Hamleys Union Jack Hand Glider..."
          age="3Y+"
          category="Games & Puzzles"
          prize="459"
          originalprize="499"
          save=" 8"
        />
      </OwlCarousel>
    </div>
  );
}
export default Hamleyexclusive;
