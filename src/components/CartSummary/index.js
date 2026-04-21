import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (acc, each) => acc + each.price * each.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="total-heading">
            Order Total: <span className="price">Rs {totalAmount}</span>
          </h1>
          <p className="checkout-details">{cartList.length} Items in Cart</p>
          <button className="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
