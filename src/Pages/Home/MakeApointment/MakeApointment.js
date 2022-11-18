import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import BtnPrimary from '../../../component/BtnPrimary/BtnPrimary';

const MakeApointment = () => {
    return (
        <section className='mt-16' style= {{
            background : `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-36 hidden md:block lg:w-1/2 rounded-lg" alt=''/>
                    <div>
                        <h1 className="text-xl text-primary font-bold">Appointment</h1>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <BtnPrimary></BtnPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeApointment;