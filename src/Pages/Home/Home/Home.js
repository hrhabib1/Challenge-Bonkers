import React from 'react';
import Banner from '../Banner/Banner';
import InfoCarts from '../InfoCart/InfoCarts';
import MakeApointment from '../MakeApointment/MakeApointment';
import MakeService from '../MakeService/MakeService';
import ServiceCarts from './ServiceCart/ServiceCarts';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCarts></InfoCarts>
            <ServiceCarts></ServiceCarts>
            <MakeService></MakeService>
            <MakeApointment></MakeApointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;