import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import ServiceCart from './ServiceCart';
const ServiceCarts = () => {
    const serviceCarts = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nisi esse iste magnam blanditiis fugiat, molestiae nemo doloribus aliquam ratione aut ad, libero eveniet aperiam minima debitis sit neque est.',
            icon: fluoride,

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nisi esse iste magnam blanditiis fugiat, molestiae nemo doloribus aliquam ratione aut ad, libero eveniet aperiam minima debitis sit neque est.',
            icon: cavity,

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nisi esse iste magnam blanditiis fugiat, molestiae nemo doloribus aliquam ratione aut ad, libero eveniet aperiam minima debitis sit neque est.',
            icon: whitening,

        },
    ]
    return (
        <div className='my-16'>
            <div className='text-center my-5'>
                <h3 className='text-xl text-primary font-bold'>OUR SERVICES</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
                {
                    serviceCarts.map(service => <ServiceCart
                        key={service.id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default ServiceCarts;