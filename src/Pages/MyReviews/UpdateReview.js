import React from 'react';

const UpdateReview = () => {
    const handlerReviewSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const reviewUpdateMessage = form.message.value;
        console.log(reviewUpdateMessage);
    }
    return (
        <div>
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