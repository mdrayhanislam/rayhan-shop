import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [product, setProduct] = useState([])

    useEffect( () =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl">this product: {product.length} </h1>
        </div>
    );
};

export default Shop;