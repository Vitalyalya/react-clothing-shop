import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

import CheckoutItem from "../../checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const { cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return (
          //   <div key={id}>
          //     <div>{name}</div>
          //     <div>{quantity}</div>
          //     <div>{price}</div>
          //   </div>
          <CheckoutItem key={item.id} cartItem={item} />
        );
      })}

      <div className="total">
        {!cartTotal ? `TOTAL: ${cartTotal}` : `TOTAL: $${cartTotal}`}
      </div>
    </div>
  );
};

export default Checkout;
