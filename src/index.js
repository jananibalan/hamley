import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Banner from "./banner";
import Shopbyage from "./shopbyage";
import Trending from "./trending";
import Deals from "./deals";
import Newarrival from "./newarrivals";
import Featurebrand from "./featurebrand";
import Shopbycharacter from "./shopbycharacter";
import Hamleyexclusive from "./hamleyexclusives";
import Footer from "./footer";
import Shopbycategory from "./shopbycategory";
import Bestseller from "./bestseller";
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
