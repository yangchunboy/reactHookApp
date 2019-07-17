import React, { useReducer, useState } from 'react'
import { TestContext } from '../../context'
import Count from './components/Count'
import reducer, { initalState, changeOneState, changeTwoState } from './reducer'

const Home = ({ history }) => {
  const [ thirdState, setThirdState ] = useState(3)

  const [ state, dispatch ] = useReducer(reducer, initalState)
  console.log(state)
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
      <div>我是firstState:{ state.firstState }</div>
      <div onClick={() => { dispatch(changeTwoState()) }}>我是secondState:{ state.secondState }</div>
      <button onClick={ () => dispatch(changeOneState(3)) }>点击更改state的值</button>
      <div onClick={ () => setThirdState(6) }>我是useState的值：{ thirdState }</div>
    </div>
  )
}

export default Home
