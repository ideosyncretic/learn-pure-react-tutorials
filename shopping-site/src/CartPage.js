import React from 'react'
import Item from './Item'
import './ItemPage.css'

function CartPage( {items} ) {
  return (
    <ul className='CartPage-items'>
      {items.map( item =>
        <li key={item.id} className='CartPage-item'>
          <Item item={item}>
            <div className='CartItem-controls'>
              <button
                className='CartItem-removeOne'
                onClick={onRemoveOne.bind(null, item)}>&ndash;</button>
              <span className='CartItem-count'>{item.count}</span>
              <button
                className='CartItem-addOne'
                onClick={onAddOne.bind(null, item)}>+</button>
            </div>
          </Item>
        </li>
      )}
    </ul>
  )
}
CartPage.propTypes = {
  items: React.PropTypes.array.isRequired,
  onAddOne: React.PropTypes.func.isRequired,
  onRemoveOne: React.PropTypes.func.isRequired
}

export default CartPage
