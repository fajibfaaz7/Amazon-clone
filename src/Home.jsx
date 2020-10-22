import React from "react";
import Product from "./Product";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={1223456}
          title="Phone Case"
          price={11.26}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/61xAuF0C%2BKL._AC_UL270_SR270,270_.jpg"
        />
        <Product
          id={1223677}
          title="Art for wall"
          price={1.26}
          rating={5}
          image="https://www.amazon.in/images/I/51ewoOQv5lL.__AC_SY200_.jpg"
        />
        <Product
          id={12234577}
          title="Pendrive"
          price={5.26}
          rating={5}
          image="https://m.media-amazon.com/images/I/31NJ8yrcbPL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
