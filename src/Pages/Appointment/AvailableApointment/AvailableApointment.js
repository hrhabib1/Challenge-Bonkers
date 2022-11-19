import React from 'react';
import { format } from 'date-fns';

const AvailableApointment = ({selectedDate}) => {
    return (
        <section className='mt-16'>
           <div className='text-center text-success font-bold'>
           <p>Available Appointments on {format(selectedDate, 'PP')}.</p>
            </div> 
        </section>
    );
};

export default AvailableApointment;