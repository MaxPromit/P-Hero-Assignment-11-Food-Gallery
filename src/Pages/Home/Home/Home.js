import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWithUs from '../../ConnectWithUs/ConnectWithUs';
import CustomerReview from '../../CustomerReview/CustomerReview';
import Services from '../Services/Services';

const Home = () => {
    document.title = 'Food Gallery - Home';
    return (
        <div>
            <div className='flex justify-evenly items-center'>
            <div>
                <h1 className='text-8xl font-semibold'>
                The Best <br />
                Restaurants <br />
                In Your Home
                </h1>
            </div>
            <div>
                <img src="https://i.ibb.co/mSn1G3x/home.png" alt="" />
            </div>
        </div>
        <div className='mt-16 text-center'>
            <h2 className='text-4xl font-semibold mb-10'>Our Service</h2>
            <div>
            <Services></Services>
            </div>
            <div className='my-10'>
                <Link to='/allCardService'><button className='btn btn-info'>See All</button></Link>
            </div>
        </div>
        <div className='my-10'>
            <CustomerReview></CustomerReview>
        </div>
        <div className='my-10'>
            <ConnectWithUs></ConnectWithUs>
        </div>

        </div>
        
    );
};

export default Home;

