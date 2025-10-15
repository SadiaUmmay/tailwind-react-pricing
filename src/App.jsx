
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav'
import Navbar from './components/daisyNav/Navbar'
import PricingOptions from './components/pricing-options/PricingOptions'

const pricingPromise = fetch("PricingData.json").then(res => res.json())
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
      </main>
      <footer>

      </footer>
     
    </>
  )
}

export default App
