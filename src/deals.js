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

function Deals() {
  return (
    <div className="row mt-3 pt-3 ml-4">
      <h4 className="myfont">Deals</h4>
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
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491603884-1.jpg"
          title="
Hamleys Foosball Table Footbal... "
          age="3Y+"
          category="Sports & ride Ons"
          prize="3299"
          originalprize="4499"
          save="27"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491318880-1.jpg"
          title="Barbie 2 Story House And Doll,..."
          age="3Y+"
          category="Dolls & Fashion"
          prize="3,759"
          originalprize="4,699"
          save=" 20"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491227887-1.jpg"
          title="Chicco U-Go Ducati Trike"
          age="18M+"
          category="Sports & ride Ons"
          prize="5,089"
          originalprize="6,790"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/490619093-1.jpg"
          title="Hamleys Telescope(Silver)"
          age="8Y+"
          category="Education & Constructi..."
          prize="1,749"
          originalprize="2,499"
          save=" 30"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491395736.jpg"
          title="Giggles My First New Easel - B..."
          age="3Y+"
          category="Arts & Crafts"
          prize="2,099"
          originalprize="2,999"
          save=" 30"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491568977-1_1.jpg"
          title="Unicorn 100 Cm Soft Toy"
          age="12M+"
          category="Soft Toys"
          prize="2,999"
          originalprize="3,999"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491602358.jpg"
          title="Hover Blast 3 In 1 Air, Land a..."
          age="8Y+"
          category="Vehicles, Tracksets & R..."
          prize="4,339"
          originalprize="5,499"
          save=" 21"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491160389-1.jpg"
          title="Go Discover Interactive Early ..."
          age="2Y+"
          category="Infant & Pre-School"
          prize="3,159"
          originalprize="3,999"
          save=" 21"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491227888-1.jpg"
          title="Chicco U-Go Trike"
          age="18M+"
          category="Sports & Ride Ons"
          prize="4,869"
          originalprize="6,490"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491315978-1.jpg"
          title="Peppa Pig Family Plush Gift B..."
          age="12M+"
          category="Soft Toys"
          prize="1,959"
          originalprize="2,799"
          save=" 30"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491568195-1.jpg"
          title="Fisher-Price Infant-To-Toddler..."
          age="0M+"
          category="Infant & Pre-School"
          prize="4,499"
          originalprize="5,999"
          save=" 25"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491603888-1.jpg"
          title="Hostfull Basketball Game With ..."
          age="5Y+"
          category="Games & Puzzles"
          prize="3,349"
          originalprize="4,999"
          save=" 33"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902575-1.jpg"
          title="Barbie Dream Closet"
          age="3Y+"
          category="Dolls & Fashion"
          prize="3,599"
          originalprize="4,499"
          save=" 20"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491375055-1.jpg"
          title="Fisher Price Deluxe Kick And P..."
          age="6M+"
          category="Infant & Pre-School"
          prize="4,179"
          originalprize="5,499"
          save=" 24"
        />
        <Buycard
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491232270_1.jpg"
          title="Rowan Rotating Musical Fishing..."
          age="3Y+"
          category="Games & Puzzles"
          prize="1,099"
          originalprize="1,599"
          save=" 31"
        />
      </OwlCarousel>
    </div>
  );
}
export default Deals;
