import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'

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
          <Popup
            modal
            trigger={
              <button type="button" data-testid="checkout-button" className="button">
                Checkout
              </button>
            }
          >
            {close => (
              <PaymentPopup
                totalAmount={totalAmount}
                totalItems={cartList.length}
                close={close}
              />
            )}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
