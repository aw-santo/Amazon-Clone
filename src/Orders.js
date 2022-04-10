import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    if(user) {
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      ))
    } else {
      setOrders([]);
      console.log("err");
    }
    console.log(orders);
  }, [user])
  
  if (!user) {
    return (
      <Link to='/login'><h2 style={{
        margin: '50px 50px'
      }}>Login First...</h2></Link>
    );
  }

  return (
    <div className='orders'>
        <h1>Your orders🎁</h1>

        <div className="orders-order">
          {orders?.map(order => (
            <Order order={order}/>
          ))}
        </div>
    </div>
  );
}

export default Orders;