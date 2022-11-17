import React from 'react';
import Banner from '../Banner/Banner';
import InfoCarts from '../InfoCart/InfoCarts';
import ServiceCarts from './ServiceCart/ServiceCarts';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCarts></InfoCarts>
            <ServiceCarts></ServiceCarts>
        </div>
    );
};

export default Home;