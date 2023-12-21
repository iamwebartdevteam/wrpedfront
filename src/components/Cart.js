import React from "react";
import AddToCart from "./AddToCart";

const Cart = ({ cartItem, totalAmount, rootApiData }) => {
  return (
    <div className="cartpage">
      <AddToCart
        cartItem={cartItem}
        rootApiData={rootApiData}
        totalAmount={totalAmount}
      />
    </div>
  );
};

export default Cart;
