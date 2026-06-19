import {useState} from 'react'
import './index.css'

const PaymentPopup = ({totalAmount, totalItems, close}) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  const [isCodeSelceted, setIsCodeSelected] = useState(false)

  const onConfirmOrder = () => {
    setIsOrderPlaced(true)
  }

  if (isOrderPlaced) {
    return (
      <div className='success-container'>
        <p className='success-message'>
          Your order has been placed successfully
        </p>
      </div>
    )
  }

  return (
    <div className='popup-container'>
      <button type='button' className='close-btn' onClick={() => close()}>
        {' '}
        X{' '}
      </button>

      <h1 className='popup-heading'>Payment Method</h1>

      <div className='payment-option'>
        <input type='radio' name='payment' id='card' disabled />
        <label htmlFor='card'>Card</label>
      </div>

      <div className='payment-option'>
        <input type='radio' name='payment' id='net-Banking' disabled />
        <label htmlFor='net-Banking'>Net Banking</label>
      </div>

      <div className='payment-option'>
        <input type='radio' name='payment' id='upi' disabled />
        <label htmlFor='upi'>UPI</label>
      </div>

      <div className='payment-option'>
        <input type='radio' name='payment' id='wallet' disabled />
        <label htmlFor='wallet'>Wallet</label>
      </div>

      <div className='payment-option'>
        <input
          type='radio'
          name='payment'
          checked={isCodeSelceted}
          id='cod'
          onChange={() => setIsCodeSelected(true)}
        />
        <label htmlFor='cod'>Cash on Delivery</label>
      </div>

      <div className='summary-container'>
        <p className='summary-text'>
          Items: <span className='price-details'>{totalItems}</span>
        </p>
        <p className='summary-text'>
          Total Price: <span className='price-details'>Rs {totalAmount}</span>
        </p>
      </div>

      <button
        className='confirm-btn'
        type='button'
        disabled={!isCodeSelceted}
        onClick={onConfirmOrder}
      >
        Confirm Order
      </button>
    </div>
  )
}

export default PaymentPopup
