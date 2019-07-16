import React from 'react'
import { TestContext } from '../../context'
import Count from './components/Count'

const Home = ({ history }) => {

  const goShopCar = () => {
    history.push('/shopCar');
  }

  return (
    <div id="home">
      我是home页面
      <div className="blue">我的颜色是蓝色</div>
      <TestContext.Provider value="我是testContext">
        <Count />
      </TestContext.Provider>
      <div onClick={goShopCar}>点击跳转购物车页面</div>
    </div>
  )
}

export default Home
