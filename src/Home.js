import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home-container">
            <img className='home-image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" srcSet="" />

            <div className="home-row">
              <Product 
                id="672053"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX235_B01,204,203,200_.jpg"
              />
              <Product 
                id="348915"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://d1qek42f5a2sdm.cloudfront.net/temp/cuploads/ap-south-1%3A9a21400b-e56f-4e6e-912a-5dd5646e0a88/rategalley/products/1632213045480Kenwood-kmix.jpg"
              />
            </div>

            <div className="home-row">
            <Product 
              id="786746"
              title="Fitbit Charge 3 Fitness Activity Tracker (Graphite and Black)"
              price={199.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product 
              id="234056"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product 
              id="925791"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            </div>

            <div className="home-row">
            <Product 
              id="571963"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
            </div>
        </div>
    </div>
  );
}

export default Home;