import React from 'react'

const Main = ({ products, addItem, cartItems, increaseItemQuantity }) => {
  const addition = (product, index) => {
    if(cartItems.some(item => item.id === product.id)){
      increaseItemQuantity(product.id)
    } else {
      addItem(product, index)
    }
  }

  return (
    <div className="product-container">
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={product.id}>
            <img src={product.image_url} alt="product" />
            <span className="my-2">{product.title}</span>
            {product.price}
            <button onClick={() => addition(product, index)} className="my-2 add">Add To Cart</button>
          </div>)
        )}
      </div>
    </div>
  )
}

export default Main
