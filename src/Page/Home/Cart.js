import React from 'react';

const cart = ({cart}) => {
    return (
        <div className="card-body sticky top-0">
            <h4 className='text-2xl'>Order Summary</h4>
            <p>Select Items: {cart.length}</p>
        </div>
    );
};

export default cart;