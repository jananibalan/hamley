import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./elements/navbar";
import Banner from "./elements/banner";
import Shopbyage from "./elements/shopbyage";
import Trending from "./elements/trending";
import Deals from "./elements/deals";
import Newarrival from "./elements/newarrivals";
import Featurebrand from "./elements/featurebrand";
import Shopbycharacter from "./elements/shopbycharacter";
import Hamleyexclusive from "./elements/hamleyexclusives";
import Footer from "./elements/footer";
import Shopbycategory from "./elements/shopbycategory";
import Bestseller from "./elements/bestseller";
import "./css/style.css";
class Hamleys extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Shopbyage />
        <Trending />
        <Deals />
        <Bestseller />
        <Newarrival />
        <Featurebrand />
        <Hamleyexclusive />
        <Shopbycategory />
        <Shopbycharacter />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<Hamleys />, document.getElementById("root"));
