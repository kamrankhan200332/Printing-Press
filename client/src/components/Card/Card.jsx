import React from "react";
import { ProdState } from "../../context/ContextApi";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const {
    state: { card, cart },
    dispatch,
  } = ProdState();
  return (
    <div>
      <div className="px-[20px] md:px-[30px] xl:px-[55px] py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 w-full">
          {card.map((cardItem, index) => {
            const handleNavigateToSingleProductPage = () => {
              navigate("/singleProduct", { state: cardItem });
            };
            return (
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
                  Rs. {cardItem.price}
                </p>

                <div className="btn flex flex-col sm:flex-row sm:space-y-0 space-y-3 items-center justify-center sm:space-x-3">
                  <div className="w-full">
                    {cart.some((p) => p.id === cardItem.id) ? (
                      <button
                        className="bg-red-700 text-white hover:bg-red-800 cursor-pointer rounded py-2 px-3 text-nowrap font-semibold w-full"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: cardItem,
                          })
                        }
                      >
                        REMOVE FROM CART
                      </button>
                    ) : (
                      <button
                        className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer rounded py-2 px-3 font-semibold w-full"
                        onClick={() =>
                          dispatch({ type: "ADD_TO_CART", payload: cardItem })
                        }
                      >
                        ADD TO CART
                      </button>
                    )}
                  </div>

                  <div className="w-full">
                    <button
                      className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer rounded py-2 px-3 font-semibold w-full"
                      onClick={handleNavigateToSingleProductPage}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
