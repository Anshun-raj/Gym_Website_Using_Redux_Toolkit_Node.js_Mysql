import React from "react";
import "../Style/Cart.css";
import { remove } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="cart">
      <h2>Cart page</h2>
      <div className="cartInfo">
        {cartitems.map((item,index) => (
          <div className="cartCard" key={index}>
            <img src={item.img} alt="img" className="cartImg" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleremove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
