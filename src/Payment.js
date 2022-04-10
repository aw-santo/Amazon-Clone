import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const nav = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const res = await axios({
                method: 'post',
                // headers: {
                //   'Content-Type': 'application/json'
                //   // 'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // body: JSON.stringify({
                //   name: user?.email.substring(0,6)
                // }),
                // stripe accepts total in currencies subunit
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(res.data.clientSecret);
        }

        getClientSecret();
    }, [basket])
    
    console.log('Secret: ', clientSecret);
    console.log('User: ', user);
    console.log(user?.email.substring(0, 6));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ error, paymentIntent }) => {
        // paymentIntent = payment confirmation

        if (error) {
          console.log(error);
        }
        else{
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET'
        });

        nav('/orders', {replace: true});}
    })
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} item(s)</Link>}</h1>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Event Horizon</p>
            <p>Black Hole, Milky Way</p>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment-items">
            {/* basket prods */}
            {basket.map((item) => (
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

        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment-details">
            {/* Stripe magic */}

            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>
                        {
                            processing ?
                            <p>Processing</p> :
                            "Buy Now"
                        }
                    </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
