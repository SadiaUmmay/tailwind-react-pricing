
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav'
import Navbar from './components/daisyNav/Navbar'
import PricingOptions from './components/pricing-options/PricingOptions'
import ResultChart from './components/resultChart/ResultChart'
// import axios from 'axios'
import MarkCharts from './components/markCharts/MarkCharts'

const pricingPromise = fetch("PricingData.json").then(res => res.json())
// const marksPromise = axios.get('marksData.json')
function App() {
  

  return (
    <>
  
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        {/* <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <MarkCharts ></MarkCharts>
        </Suspense> */}
        <ResultChart></ResultChart>
        <MarkCharts></MarkCharts>
      </main>
      <footer>

      </footer>
     
    </>
  )
}

export default App
