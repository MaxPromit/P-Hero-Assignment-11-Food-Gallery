import React from 'react';

const ServiceCard = ({product}) => {
    const {img,price,title,details} = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className='object-cover w-96 h-64 rounded-lg' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details.slice(0, 150) + '...'}</p>
          <div className="card-actions flex items-center justify-between">
           <div>
            <h3 className='text-2xl text-indigo-500 font-semibold'>Price: ${price}</h3>
           </div>
            <div>
            <button className="btn bg-blue-800 hover:bg-blue-700">Check Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;