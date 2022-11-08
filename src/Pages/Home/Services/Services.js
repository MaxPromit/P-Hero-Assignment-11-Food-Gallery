import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/limit/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-16'>
            {products.map(product => <ServiceCard key={product._id} product={product}></ServiceCard>)}
        </div>
    );
};

export default Services;