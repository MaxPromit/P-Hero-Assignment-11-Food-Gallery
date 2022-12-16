import React, { useEffect, useState } from 'react';
import AllCardServiceItems from './AllCardServiceItems';

const AllCardService = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:m-0 lg:m-0 m-16'>
            {products.map(product => <AllCardServiceItems key={product._id} product={product}></AllCardServiceItems>)}
        </div>
    );
};

export default AllCardService;