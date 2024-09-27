import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner/Banner";
import { banner, card } from "../utils/constant/index";
import "./Home.css";
import Card from "../components/common/Card/Card";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
const Home = () => {
  console.log(banner[0]);
  return (
    <div>
      <Header />
      <Banner isbutton data={banner[0]} />
      <Banner isrotate data={banner[1]} />
      <Banner data={banner[2]} />
      <h1 className="headingService">Some Services we Offer</h1>
      <div className="cardHome">
        {card.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
      <Banner isbutton2 isbutton isrotate data={banner[3]} />
      <Contact/>
      <Footer/>
    </div>
    
  );
};

export default Home;
