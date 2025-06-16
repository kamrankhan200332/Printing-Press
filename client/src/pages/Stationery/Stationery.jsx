import React from 'react';
import Hero from '../../components/Hero/Hero';
import Heading from '../../components/Heading/Heading';
import Card from '../../components/Card/Card';
import stationeryImg from "../../assets/images/stationery_printing.webp"

const Stationery = () => {
  return (
    <div>
      <Hero printing="Stationery Printing in Pakistan" image={stationeryImg} />
      <div>
        <div className="px-[20px] md:px-[30px] xl:px-[55px]">
          <Heading heading="STATIONERY PRODUCTS" />
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Stationery;
