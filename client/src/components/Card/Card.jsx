import React from 'react';
import { ProdState } from '../../context/contextApi';

const Card = () => {
    const { state: { prod, card } } = ProdState();
  return (
    <div>
      <div className=" px-[70px] py-5">
        
        <div className="grid grid-cols-3 gap-10 w-full">
          {card.map((cardItem, index) => (
            <div
              key={index}
              className="w-[100%] p-7 shadow-xl border border-gray-300 bg-gray-200 rounded space-y-2"
            >
              <div className="image">
                <img src={cardItem.img} className="w-full" alt="" />
              </div>
              <h1 className="text-center font-semibold text-xl text-green-600">
                {cardItem.title}
              </h1>
              <p className="text-center font-bold text-xl text-gray-700">
                {cardItem.price}
              </p>
              <div className="btn flex items-center justify-center">
                <button className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer rounded py-2 px-5 font-semibold">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
