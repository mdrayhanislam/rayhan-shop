import React from 'react';

const Shop = ({product}) => {
   
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <h2 className="card-title">Price: ${product.price}</h2>
                <p>Manufacturer: {product.seller}</p>
                <p>Rating: {product.ratings}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;