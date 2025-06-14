import React from 'react';
import Hero from '../../components/Hero/Hero';
import Heading from '../../components/Heading/Heading';
import Card from '../../components/Card/Card';
import uvImg from "../../assets/images/UV_Printing.webp"

const UVPrinting = () => {
  return (
    <div>
      <Hero printing="UV DTF Printing in Pakistan" image={uvImg} />
      <div>
        <div className="px-[70px]">
          <Heading heading="UV DTF PRODUCTS" />
        </div>
        <Card />
      </div>
    </div>
  );
}

export default UVPrinting;
