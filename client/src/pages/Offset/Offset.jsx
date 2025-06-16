import React from "react";
import Hero from "../../components/Hero/Hero";
import offsetImg from "../../assets/images/offset_printing.webp";
import Heading from "../../components/Heading/Heading";
import { ProdState } from "../../context/ContextApi";
import Card from "../../components/Card/Card";

const Offset = () => {
  const {
    state: { card },
  } = ProdState();
  return (
    <div>
      <Hero printing="Offset Printing in Pakistan" image={offsetImg} />
      <div>
        <div className="px-[20px] md:px-[30px] xl:px-[55px]">
          <Heading heading="OFFSET PRODUCTS" />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Offset;
