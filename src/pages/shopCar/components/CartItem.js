import React from 'react';

const CartItem = ({ changeState }) => {
  return (
    <div onClick={changeState}>
      在子组件里更改state
    </div>
  )
}

export default CartItem;
