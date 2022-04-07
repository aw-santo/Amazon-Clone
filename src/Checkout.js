import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  // eslint-disable-next-line
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout-ad"
        />

        <div>
          <h3>Hello, {user?.email.substring(0, 6)}</h3>
          <h2 className="checkout-title">Your Shopping Cart</h2>

          {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
          ))}
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
