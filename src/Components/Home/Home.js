import React from "react";
import "./Home.css";
import Product from '../Product/Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="1"
            name = "The Lean Startup"
            title="How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
            quantity= "1"   
          />
          <Product
            id="2"
            name = "Acer Laptop"
            title="Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, 4GB DDR4, 128GB SSD, Silver"
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"  
            quantity= "1"     
          />
           <Product
            id="3"
            name = "Mi Band 5"
            title="Smart Bracelet Swim Sport Monitor Waterproof International Version(Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/512j23v%2Bu6L._AC_SL1000_.jpg"
            quantity= "1"
            />
        </div>

        <div className="home__row">
        <Product
            id="4"
            name="Mens T-Shirt"
            title="STYLENSE Men's Cotton Printed Sleeveless Regular Fit T-Shirt"
            image="https://images-na.ssl-images-amazon.com/images/I/61t-d0EONLL._UL1500_.jpg"   
            quantity= "1"
          />
        
          <Product
            id="5"
            name="Sunglasses"
            title="ARZONAI Unisex Square FAMOUS SAHIL KHAN STYLISH Trendy Sunglasses (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/51DQjbN1R6L._UL1024_.jpg"
            quantity= "1"
           />

          <Product
            id="6"
            name="Joy Stick"
            title="Elite Series 2 Controller - Black"
            image="https://images-na.ssl-images-amazon.com/images/I/71F6eID-ImL._SL1500_.jpg"  
            quantity= "1"  
          />
          
        </div>

        <div className="home__row">
          <Product
            id="7"
            name="LED TV"
            title="Samsung Electronics UN32N5300AFXZA 32 1080p Smart LED TV (2018), Black"
            image="https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_SL1500_.jpg"
            quantity= "1"
              
          />
          <Product
            id="8"
            name="Whey Protein"
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs"
            image="https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
            quantity= "1"
              
          />
          <Product
            id="9"
            name="OnePlus 7T"
            title="8GB RAM + 128GB Memory,US Model (Glacier Blue)"
            image="https://images-na.ssl-images-amazon.com/images/I/51GGjGUfuFL._AC_SL1000_.jpg"
            quantity= "1"
              
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
