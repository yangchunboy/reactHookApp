import React, { useCallback } from 'react';
import CartItem from './components/CartItem';

import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/index';

const ShopCar = () => {
  const user = useSelector(state => state.user)
  // console.log('我重新渲染了')
  const dispatch = useDispatch()

  // 传给子组件dispatch的时候用userCallBack
  const changeState = useCallback(() => {
    dispatch(updateUser({ name: '王五', age: 100 }))
  }, [dispatch])

  return(
    <div id="shopCar">
      我是购物车页面
      <div>state里user的值: 名字:{ user.name } 年龄:{ user.age }</div>
      <div onClick={ () => dispatch(updateUser({ name: '李四', age: 88 })) }>修改用户信息</div>
      <CartItem 
        changeState = { changeState }
      />
    </div>
  )
}

export default ShopCar;
