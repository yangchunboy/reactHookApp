import React from 'react'
import { TestContext } from '../../context'
import Count from './components/Count'

const Home = () => {
  return (
    <div id="home">
      我是home页面
      <TestContext.Provider value="我是testContext">
        <Count />
      </TestContext.Provider>
    </div>
  )
}

export default Home
