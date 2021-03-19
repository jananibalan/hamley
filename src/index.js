import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Banner from "./banner";
import Shopbyage from "./shopbyage";
import Trending from "./trending";
import Deals from "./deals";
import Newarrival from "./newarrivals";
import Featurebrand from "./featurebrand";
class Hamleys extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Shopbyage />
        <Trending />
        <Deals />
        <Newarrival />
        <Featurebrand />
      </div>
    );
  }
}
ReactDOM.render(<Hamleys />, document.getElementById("root"));
