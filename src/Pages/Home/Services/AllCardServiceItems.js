import React from 'react';
import { Link } from 'react-router-dom';

const AllCardServiceItems = ({product}) => {
    const {img,price,title,details,_id} = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions flex items-center justify-between">
           <div>
            <h3 className='text-2xl text-indigo-500 font-semibold'>Price: ${price}</h3>
           </div>
            <div>
           <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link> 
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllCardServiceItems;