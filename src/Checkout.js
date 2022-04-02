import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout' >
        <div className="checkout-left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout-ad" />

            <div>
                <h2 className="checkout-title">
                    Your Shopping Basket
                </h2>
            </div>
        </div>

        <div className="checkout-right">
            <Subtotal />
            {/* <h2>Subtotal</h2> */}
        </div>
    </div>
  );
}

export default Checkout;