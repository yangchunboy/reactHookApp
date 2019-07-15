import React from 'react';
import './App.css';
import Count from './Count'
import { TestContext } from './context'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <TestContext.Provider value="我是testContext">
        <Count />
      </TestContext.Provider>
    </div>
  );
}

export default App;
