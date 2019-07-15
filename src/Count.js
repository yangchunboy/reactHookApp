import React, { useState, useEffect, useContext } from 'react';
import { TestContext } from './context'

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  
  const context = useContext(TestContext)
  // console.log(context)
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>context的值是：{ context }</div>
    </>
  );
}

export default Example
