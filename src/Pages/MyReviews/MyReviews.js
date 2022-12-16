import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContex } from '../../Context/AuthProvider';
import ReviewCart from './ReviewCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    document.title = 'Food Gallery - Review List';
    const { user, logOut } = useContext(AuthContex);
    const [reviewsItem, setReviewsItem] = useState([]);
    
    // console.log(ordersItem)

    useEffect(()=>{
        if(!user?.email){
            return
          }
        fetch(`http://localhost:4000/reviews?email=${user?.email}`,{
            headers: {
                authorization : `Bearer ${localStorage.getItem('food-token')}`
            }
        })
        .then((res) => {
            if(res.status === 401 || res.status === 403){
             return logOut()
            }
          return res.json()
          })
        .then(data => setReviewsItem(data))
    },[user?.email, logOut])

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
                    toast('Deleted Successfully')
                    const remaining = reviewsItem.filter(ord => ord._id !== id)
                    setReviewsItem(remaining)
                }
            })
        }
    }
    console.log(reviewsItem.length)
    return (
        <div><ToastContainer></ToastContainer>
            <h2 className='text-center text-3xl font-semibold'>Our Reviews</h2>

            <div className='h-96'>
                {reviewsItem.length === 0 ? <h2 className='text-3xl text-center font-semibold'>No reviews were added</h2> : reviewsItem.map(review => <ReviewCart key={review._id} review={review} handlerDelete={handlerDelete}></ReviewCart>)}
            </div>
        </div>
    );
};

export default MyReviews;