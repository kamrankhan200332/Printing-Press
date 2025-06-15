import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ProdState } from "../../context/ContextApi";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = ProdState();

    const [total, setTotal] = useState(0);
    

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      const cleanPrice = Number(curr.price.toString().replace(/[^0-9.]/g, ""));
      return acc + cleanPrice * curr.qty;
    }, 0);
    setTotal(totalPrice.toFixed(2)); // optionally round to 2 decimal places
  }, [cart]);
  return (
    <div className="home flex justify-between ">
      <div className="productContainer flex m-[10px] w-[70%]">
        <div className="listGroup w-[100%]">
          {cart.map((prod) => (
            <div
              key={prod.id}
              className="flex border items-center my-1 rounded py-1 px-2 justify-between"
            >
              <div className="image">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-[120px] h-[90px] object-cover rounded"
                />
              </div>
              <div className="name w-[150px]">
                <span className="font-semibold">{prod.title}</span>
              </div>
              <div className="price">
                <span>$ {prod.price}</span>
              </div>
              <div className="rating">
              </div>
              <div className="flex w-[100px] border p-0.5 rounded">
                <select
                  className="select w-[100%] border-none outline-none cursor-pointer"
                  value={prod.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(prod.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
                {/* <div>kamran </div> */}
              </div>
              <div className="delete">
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                  }
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="filter w-[29%] m-[10px] h-[86vh] bg-slate-700 space-y-4 text-white flex items-start flex-col p-3">
        <span className="text-xl font-bold">
          Subtotal ({cart.length}) items
        </span>
        <span className="font-bold text-[20px]">Total: Rs {total}</span>
        
        <button
          type="button"
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer font-semibold py-1 flex items-center justify-center text-[18px] w-[100%] rounded"
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
