import React from "react";
import { Link } from "react-router-dom";
import ConnectWithUs from "../../ConnectWithUs/ConnectWithUs";
import CustomerReview from "../../CustomerReview/CustomerReview";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../Services/Services";
import Lottie from "lottie-react";
import food from "../../../food.json";
import delevary from "../../../delevery.json";

const Home = () => {
  document.title = "Food Gallery - Home";

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="text-7xl line font-semibold font-lexend">
            <span>The Best</span> <br />
            <span className="resturant">Restaurants</span> <br />
            <span className="mt-6">In Your Home</span>
          </h1>
        </div>
        <div>
          <Lottie className="w-96" animationData={food}></Lottie>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-medium mb-10 font-lexend">Our Services</h2>
        <div>
          <Services></Services>
        </div>
        <div className="my-10">
          <Link to="/allCardService">
            <button className="btn color-see">See All</button>
          </Link>
        </div>
      </div>
      <div>
        <Portfolio></Portfolio>
      </div>
      <div className="my-10">
        <CustomerReview></CustomerReview>
      </div>
      <div className="my-10">
        <ConnectWithUs></ConnectWithUs>
      </div>
    </div>
  );
};

export default Home;
