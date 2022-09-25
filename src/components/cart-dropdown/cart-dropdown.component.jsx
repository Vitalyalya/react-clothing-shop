import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      ) : (
        <div className="empty-message">Your cart is empty</div>
      )}
      <Button
        onClick={() => {
          goToCheckoutHandler();
          toggleIsCartOpen();
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
