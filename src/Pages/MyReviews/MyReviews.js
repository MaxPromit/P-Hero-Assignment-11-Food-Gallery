import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContex } from '../../Context/AuthProvider';
import ReviewCart from './ReviewCart';

const MyReviews = () => {
    const { user } = useContext(AuthContex);
    const [reviewsItem, setReviewsItem] = useState([]);
    // console.log(ordersItem)

    useEffect(()=>{
        fetch(`http://localhost:4000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviewsItem(data))
    },[user?.email])
    
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>Our Reviews</h2>

            <div>
                {reviewsItem.map(review => <ReviewCart key={review._id} review={review}></ReviewCart>)}
            </div>
        </div>
    );
};

export default MyReviews;