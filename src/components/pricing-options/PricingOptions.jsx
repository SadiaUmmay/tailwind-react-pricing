import React, { use } from 'react';
import PricingCard from './PricingCard';
import DaisyPricingCard from '../daisyPricing/daisyPricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
   
    return (
        <div>
            <h1 className='text-6xl text-center my-10'>Get our membership</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6'>
                {
                    // pricingData.map(pricing => <PricingCard key={pricing.id}
                    // pricing={pricing}>

                    // </PricingCard>)
                    pricingData.map(pricing => <DaisyPricingCard
                    key={pricing.id}
                    pricing={pricing}
                    ></DaisyPricingCard> )
                }
            </div>
           
        </div>
    );
};

export default PricingOptions;