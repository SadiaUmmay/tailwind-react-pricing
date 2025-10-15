import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
   
    return (
        <div>
            <p className='flex gap-2 mt-2'><CircleCheckBig />{feature}</p>
        </div>
    );
};

export default PricingFeature;