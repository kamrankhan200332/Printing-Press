import React from "react";
import Hero from "../../components/Hero/Hero";
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import largePrintingImg from "../../assets/images/large_printing.webp";

const LargePrinting = () => {
  return (
    <div>
      <Hero
        printing="Large Format Printing in Pakistan"
        image={largePrintingImg}
      />
      <div>
        <div className="px-[70px]">
          <Heading heading="LARGE FORMAT PRODUCTS" />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default LargePrinting;
