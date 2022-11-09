import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title,price,details,img} = useLoaderData()
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center'>Service Details Section</h2>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-5">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions flex items-center justify-between">
           <div>
            <h3 className='text-2xl text-indigo-500 font-semibold'>Price: ${price}</h3>
           </div>
            <div>
            <button className="btn btn-primary">Check Now</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ServiceDetails;