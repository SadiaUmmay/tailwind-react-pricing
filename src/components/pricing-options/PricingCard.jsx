import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const{name, price, description, features} = pricing
    return (
        <div className='mx-6'>
            <div className='h-100 p-5 bg-amber-400 text-white rounded-3xl border-2 border-amber-700'>
                <div>
                <h1 className='text-3xl'>{name}</h1>
                <h4>${price}</h4>
                </div>
                <div className='h-25 p-2 bg-amber-600 rounded-xl my-3 border-2 border-amber-50'>
                    <p>{description}</p>
                </div>
                <div>
                    {features.map((feature, index) => <PricingFeature
                    key={index}
                    feature={feature}
                    >

                    </PricingFeature>

                    )}
                </div>
            </div>
        </div>
    );
};

export default PricingCard;