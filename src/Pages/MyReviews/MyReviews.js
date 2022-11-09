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

    const handlerDelete = id =>{
        const procedd = window.confirm('Are You Sure, To Delete This Item')
        if(procedd){
            fetch(`http://localhost:4000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount){
                    alert('Deleted Successfully')
                    const remaining = reviewsItem.filter(ord => ord._id !== id)
                    setReviewsItem(remaining)
                }
            })
        }
      }
    
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>Our Reviews</h2>

            <div>
                {reviewsItem.map(review => <ReviewCart key={review._id} review={review} handlerDelete={handlerDelete}></ReviewCart>)}
            </div>
        </div>
    );
};

export default MyReviews;