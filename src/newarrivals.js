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
function Newarrivalelements(props) {
  return (
    <div className="col-8">
      <div
        className="card border border-secondary"
        style={{ width: "18rem", height: "30rem" }}
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
            <button
              href="#"
              class="btn"
              style={{ backgroundColor: "#940000", color: "white" }}
            >
              Add to cart
            </button>
            <a
              href="#"
              class="btn"
              style={{ backgroundColor: "#940000", color: "white" }}
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Newarrival() {
  return (
    <div className="mt-3 pt-3 ml-4">
      <h4>New arrivals</h4>
      <br></br>
      <Slider {...settings}>
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491635758-1.jpg"
          title="Chaos Orbit Blaster With 24 Da..."
          age="14Y+"
          category="Collectibles & Toys Guns"
          prize="2,339"
          originalprize="2,599"
          save=" 10"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902371-1.jpg"
          title="Sparkle Girlz Fashion Doll Wit..."
          age="3Y+"
          category="Dolls & Playsets"
          prize="1,419"
          originalprize="1,499"
          save=" 5"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902608-1.jpg"
          title="Zuru Max Build More Accessorie..."
          age="3Y+"
          category="Education & Constructi..."
          prize="1,419"
          originalprize="1,499"
          save=" 5"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491902263-1.jpg"
          title="DiiCii Knock Out Novelty Dice ..."
          age="5Y+"
          category="Games & Puzzles"
          prize="899"
          originalprize=""
          save=" "
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491636278-1.jpg"
          title="Lego 31101 Monster Truck"
          age="7Y+"
          category="Education & Constructi..."
          prize="1,379"
          originalprize="1,599"
          save=" 14"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/s/a/saregama-carvaan-mini-kids_front.jpg"
          title="Saregama Carvaan Mini 2.0 Kids"
          age=""
          category=""
          prize="2,999"
          originalprize=""
          save=" "
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490349-1.jpg"
          title="Zuru 5 Surprise Pink Mystery Capsule Collectible"
          age="2Y+"
          category="Collectibles & Toys Guns"
          prize="599"
          originalprize="799"
          save=" 25"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490375-1.jpg"
          title="Zuru Coco Plush Scoops Series ..."
          age="3Y+"
          category="Soft Toys"
          prize="369"
          originalprize="499"
          save=" 26"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490348-1.jpg"
          title="Zuru 5 Surprise Miniature Toy ..."
          age="3Y+"
          category="Collectibles & Toys Guns"
          prize="599"
          originalprize="799"
          save=" 25"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491373981.jpg"
          title="Playshifu Orboot - The Educati..."
          age="4Y+"
          category="Education & Constructi..."
          prize="1,999"
          originalprize=""
          save=" "
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567577.jpg"
          title="Pets Alive Boppi Llama-White"
          age="2Y+"
          category="Soft Toys"
          prize="1,999"
          originalprize="2,499"
          save=" 20"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491490350_1.jpg"
          title="Zuru A Magical Unicorn Surpris..."
          age="3Y+"
          category="Collectibles & Toys Guns"
          prize="675"
          originalprize="899"
          save=" 25"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567580.jpg"
          title="Zuru Oosh Cotton Candy"
          age="3Y+"
          category="Education & Constructi..."
          prize="449"
          originalprize="599"
          save=" 25"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567581.jpg"
          title="Zuru Oosh Cotton Candy Cuties"
          age="3Y+"
          category="Education & Constructi..."
          prize="769"
          originalprize="1,099"
          save=" 25"
        />
        <Newarrivalelements
          url="https://www.hamleys.in/media/catalog/product/cache/b0d373bf59d04d01353155bb036901a7/4/9/491567656.jpg"
          title="Zuru Bunch O Balloons Party Ba..."
          age="3Y+"
          category="Impulse & Novelty Toys"
          prize="1,719"
          originalprize="2,299"
          save=" 25"
        />
      </Slider>
    </div>
  );
}

export default Newarrival;
