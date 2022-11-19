import React, { useState } from 'react';
import AppointmentBener from '../AppointmentBenner/AppointmentBener';
import AvailableApointment from '../AvailableApointment/AvailableApointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBener
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBener>
            <AvailableApointment
            selectedDate={selectedDate}
            ></AvailableApointment>
        </div>
    );
};

export default Appointment;