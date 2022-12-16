import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import './style.css'
const AllCardServiceItems = ({ product }) => {
  document.title = "Food Gallery - Services";
  const { img, price, title, details, _id } = product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
       
    <PhotoProvider>
      <div className="foo">
        
          <PhotoView src={img}>
            <img className="object-cover w-96 h-64 rounded-lg" src={img} alt="" />
          </PhotoView>
        
      </div>
    </PhotoProvider> 
    {/* <img src={img} alt="" /> */}

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions flex items-center justify-between">
          <div>
            <h3 className="text-2xl text-indigo-500 font-semibold">
              Price: ${price}
            </h3>
          </div>
          <div>
            <Link to={`/serviceDetails/${_id}`}>
              <button className="btn color-btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllCardServiceItems;
