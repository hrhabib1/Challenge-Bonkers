import React from 'react';
import chair from '../../../assets/images/chair.png'
import chairBg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBener = ({ selectedDate, setSelectedDate }) => {

    return (
        <header style={{
            background: `url(${chairBg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl ml-10" alt='doctor chair' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBener;