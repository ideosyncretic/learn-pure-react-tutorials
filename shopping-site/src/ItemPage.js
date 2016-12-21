import React from 'react'
import Item from './Item'
import './ItemPage.css'

function ItemPage({ items, onAddToCart }) {
  return (
    <ul className='ItemPage-items'>
      {items.map(item =>
        <li key={item.id} className='ItemPage-item'>
          <Item item={item}>
            <button
              className='Item-addToCart'
              onClick={onAddToCart.bind(null, item)}>
              Add to Cart
            </button>
          </Item>
        </li>
      )}
    </ul>
  )

  // ".bind(null, item)" binds handler function to specific item, while passing "null" as first argument because these functions will already be bound to the proper "this" when passed in
}
ItemPage.propTypes = {
  items: React.PropTypes.array.isRequired,
  onAddToCart: React.PropTypes.func.isRequired
}

export default ItemPage
