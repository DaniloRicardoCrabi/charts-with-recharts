import { useState } from 'react' 
import renderLineChart from './components/Charts/LineChart/LineChart'
import './App.css'

function App() {
  return (
    <>
      <div>
        <main>
        {renderLineChart}
        </main>
      </div>
    </>
  )
}

export default App
