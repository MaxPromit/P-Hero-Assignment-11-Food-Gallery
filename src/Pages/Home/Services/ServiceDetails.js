import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContex } from '../../../Context/AuthProvider';

const ServiceDetails = () => {
  document.title = 'Food Gallery - Review';
    const {title,price,details,img,_id} = useLoaderData();
    const {user} = useContext(AuthContex)


    const handlerReviewSubmit = (event) =>{
      event.preventDefault();
      const form = event.target;
      const message = form.message.value;

      const review = {
        service: _id,
        serviceName: title,
        email: user?.email,
        message,

      }
      fetch('https://food-gallery-server.vercel.app/reviews', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }, 
        body: JSON.stringify(review)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast("Review Added Successfully")
          form.reset();
      }
        console.log(data)
      })
      .catch(err => console.error(err))
    }
    return (
        <div>
          <ToastContainer></ToastContainer>
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

      <div>
      <h2 className='text-3xl font-semibold text-center my-3'>Review This Item</h2>
      {user?.email ?    <form onSubmit={handlerReviewSubmit}>
      <div className='flex justify-center'>
      <textarea name='message' className="textarea textarea-info w-96" placeholder="Review"></textarea>
      </div>
      <div className='flex justify-center mb-3 mt-1'>
      <button className='btn' type="submit">Submit</button>
      </div>
      </form> : <Link className='text-3xl text-center' to='/login'><h2>Please Login For Adding Message</h2></Link>}
      </div>
        </div>
    );
};

export default ServiceDetails;