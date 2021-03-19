import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        initialSlide: 0
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
        initialSlide: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        initialSlide: 0
      }
    }
  ]
};
function Dealselement(props) {
  return (
    <div className="col-8 bg-score">
      <div
        className="card"
        style={{ width: "18rem", height: "30rem", borderRadius: "2.5%" }}
      >
        <img
          src={props.url}
          class="card-img-top"
          alt="..."
          style={{ height: "50%" }}
        />
        <div class="card-body">
          <h6 class="card-title">{props.title}</h6>
          <p class="card-text">Age-{props.age}</p>

          <p class="card-text">{props.category}</p>

          <p class="card-text" style={{ color: "red" }}>
            {props.prize}/-{" "}
            <span
              style={{
                textDecoration: "line-through",
                color: "grey"
              }}
            >
              {props.originalprize}/-
            </span>
          </p>

          <p class="card-text">Save{props.save}%</p>
          <div className="row">
            <a
              href=""
              class="btn col-6"
              style={{ backgroundColor: "#940000", color: "white" }}
            >
              Add to cart
            </a>
            <a
              href="#"
              class="btn col-6"
              style={{ backgroundColor: "#940000", color: "white" }}
            >
              Buy Now
            </a>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
function Deals() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4>Deals</h4>
      <br></br>
      <Slider {...settings}>
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491603884-1.jpg"
          title="
Hamleys Foosball Table Footbal... "
          age="3Y+"
          category="Sports & ride Ons"
          prize="3299"
          originalprize="4499"
          save="27"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491318880-1.jpg"
          title="Barbie 2 Story House And Doll,..."
          age="3Y+"
          category="Dolls & Fashion"
          prize="3,759"
          originalprize="4,699"
          save=" 20"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491227887-1.jpg"
          title="Chicco U-Go Ducati Trike"
          age="18M+"
          category="Sports & ride Ons"
          prize="5,089"
          originalprize="6,790"
          save=" 25"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/490619093-1.jpg"
          title="Hamleys Telescope(Silver)"
          age="8Y+"
          category="Education & Constructi..."
          prize="1,749"
          originalprize="2,499"
          save=" 30"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491395736.jpg"
          title="Giggles My First New Easel - B..."
          age="3Y+"
          category="Arts & Crafts"
          prize="2,099"
          originalprize="2,999"
          save=" 30"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491568977-1_1.jpg"
          title="Unicorn 100 Cm Soft Toy"
          age="12M+"
          category="Soft Toys"
          prize="2,999"
          originalprize="3,999"
          save=" 25"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491602358.jpg"
          title="Hover Blast 3 In 1 Air, Land a..."
          age="8Y+"
          category="Vehicles, Tracksets & R..."
          prize="4,339"
          originalprize="5,499"
          save=" 21"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491160389-1.jpg"
          title="Go Discover Interactive Early ..."
          age="2Y+"
          category="Infant & Pre-School"
          prize="3,159"
          originalprize="3,999"
          save=" 21"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491227888-1.jpg"
          title="Chicco U-Go Trike"
          age="18M+"
          category="Sports & Ride Ons"
          prize="4,869"
          originalprize="6,490"
          save=" 25"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491315978-1.jpg"
          title="Peppa Pig Family Plush Gift B..."
          age="12M+"
          category="Soft Toys"
          prize="1,959"
          originalprize="2,799"
          save=" 30"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491568195-1.jpg"
          title="Fisher-Price Infant-To-Toddler..."
          age="0M+"
          category="Infant & Pre-School"
          prize="4,499"
          originalprize="5,999"
          save=" 25"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491603888-1.jpg"
          title="Hostfull Basketball Game With ..."
          age="5Y+"
          category="Games & Puzzles"
          prize="3,349"
          originalprize="4,999"
          save=" 33"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902575-1.jpg"
          title="Barbie Dream Closet"
          age="3Y+"
          category="Dolls & Fashion"
          prize="3,599"
          originalprize="4,499"
          save=" 20"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491375055-1.jpg"
          title="Fisher Price Deluxe Kick And P..."
          age="6M+"
          category="Infant & Pre-School"
          prize="4,179"
          originalprize="5,499"
          save=" 24"
        />
        <Dealselement
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491232270_1.jpg"
          title="Rowan Rotating Musical Fishing..."
          age="3Y+"
          category="Games & Puzzles"
          prize="1,099"
          originalprize="1,599"
          save=" 31"
        />
      </Slider>
    </div>
  );
}
export default Deals;
