import React from 'react'
import CartItem from './CartItem'

const CartItems = (props) => {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
          {props.cartList.map(element => {
            return <CartItem
                      key={element.id}
                      name={element.product.name}
                      quantity={element.quantity}
                      price= {element.product.priceInCents}
                    />
                  })
          }
      </div>
      <div>
      <h2>Total Price:
  
          {
            props.cartList.reduce (
            (accumulator, currentValue) => accumulator + currentValue.product.priceInCents )
         }
      </h2>


      </div>
    </div>
  )
}

export default CartItems
