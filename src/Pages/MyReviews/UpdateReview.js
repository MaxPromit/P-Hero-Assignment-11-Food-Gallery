import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    document.title = 'Food Gallery - Edit Review';
    const { id } = useParams();

    const handlerReviewSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const reviewUpdateMessage = form.message.value;
        console.log(id);

        fetch(`https://food-gallery-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({message: reviewUpdateMessage})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('Message Updated')
        })

    }
 
   
      
    
    return (
        <div>
            <ToastContainer></ToastContainer>
        <h2 className='text-3xl font-semibold text-center my-3'>Review This Item</h2>
        <form onSubmit={handlerReviewSubmit}>
        <div className='flex justify-center'>
        <textarea name='message' className="textarea textarea-info w-96" placeholder="Review"></textarea>
        </div>
        <div className='flex justify-center mb-3 mt-1'>
        <button className='btn' type="submit">Submit</button>
        </div>
        </form>
        </div>
    );
};

export default UpdateReview;