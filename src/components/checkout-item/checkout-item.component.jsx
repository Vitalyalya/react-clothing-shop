import "./checkout-item.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  const { removeItemFromCart, reduceItemQuantity, increaseItemQuantity } =
    useContext(CartContext);

  const removeHandler = () => {
    removeItemFromCart(cartItem);
  };

  const reduceItemQuantityHandler = () => {
    reduceItemQuantity(cartItem);
  };
  const increaseItemQuantityHandler = () => {
    increaseItemQuantity(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={reduceItemQuantityHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemQuantityHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
