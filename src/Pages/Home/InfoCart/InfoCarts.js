import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoCart from './InfoCart';
const InfoCarts = () => {
    const infoCarts = [
        {
            id :1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'

        },
        {
            id :2,
            name: 'Visit our location',
            description: 'Noakhali, Maizdee, Chottagram',
            icon: marker,
            bgClass: 'bg-accent'

        },
        {
            id :3,
            name: 'Contuct us now',
            description: '++8801........0',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'

        },
    ]
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                infoCarts.map(infocart=> <InfoCart
                key={infocart.id}
                cart={infocart}
                ></InfoCart>)
            }
        </div>
    );
};

export default InfoCarts;