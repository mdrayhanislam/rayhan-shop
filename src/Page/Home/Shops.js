import React, { useEffect, useState } from 'react';
import Shop from './Shop'
const Shops = () => {
    const [products, setProduct] = useState([])

    useEffect( () =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl">this product: {products.length} </h1>
     <div  className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-20 px-10px'>
     {
        products.map(product => <Shop
        key={product.id}
        product={product}
        ></Shop>)
       }
     </div>
        </div>
    );
};

export default Shops;