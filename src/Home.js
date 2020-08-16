import React from 'react';
import "./Home.css";
import Products from "./Products";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg" alt="Try-prime" />
           <div className="home__row">
            <Products 
            id = "1"
            title = "BenQ 21.5-inch LED Backlit Computer Monitor, Full HD"
            price={12999}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/411qqvZIjCL._AC_US160_.jpg"
            />
            <Products 
            id = "2"
            title = "LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68V"
            price={12900}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41K7gdYhzWL._AC_US160_.jpg"
            />
            <Products 
            id = "3"
            title = "Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports "
            price={9999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Z9RtTEELL._AC_US160_.jpg"
            />
            </div>
            <div className="home__row">
            <Products 
            id = "4"
            title = "Zebronics 18.5(46.9cm) Monitor with VGA Port(Black)"
            price={3999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41yslu8tJbL._AC_US160_.jpg"
            />
            <Products 
            id = "5"
            title = "LG Ultragear 27-inch IPS FHD, G-Sync Compatible, HDR 10, Gaming Monitor with Display Port, HDMI x 2, Height Adjust & Pivot"
            price={28999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51szGjWy+lL._AC_US160_.jpg"
            />
            <Products 
            id = "6"
            title = "Dell D1918H 18.5-inch LCD Monitor"
            price={5999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/313bb3R1P4L._AC_US160_.jpg"
            />
            <Products 
            id = "7"
            title = "Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports "
            price={9999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Z9RtTEELL._AC_US160_.jpg"
            />


            </div>
            <div className="home__row">
            <Products 
            id = "8"
            title = "Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports "
            price={9999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Z9RtTEELL._AC_US160_.jpg"
            />
            <Products 
            id = "9"
            title = "Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports "
            price={9999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Z9RtTEELL._AC_US160_.jpg"
            />
            <Products 
            id = "10"
            title = "Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports "
            price={9999.00}
            rating = {5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Z9RtTEELL._AC_US160_.jpg"
            />

            </div>

        </div>
    )
}

export default Home;

