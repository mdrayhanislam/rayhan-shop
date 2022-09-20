import React, { useEffect, useState } from 'react';
import Shop from './Shop'
import Cart from './Cart'
const Shops = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleAddToCart = (Product) => {
        console.log(Product);
        const newCart = [...cart, Product];
        setCart(newCart)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
            <div>
                <h1 className="text-2xl">this product: {products.length} </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 px-10px'>
                    {
                        products.map(product => <Shop
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Shop>)
                    }
                </div>
            </div>
            <div className="card w-96 bg-blue-100 shadow-xl">

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shops;