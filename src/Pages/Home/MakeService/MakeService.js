import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import BtnPrimary from '../../../component/BtnPrimary/BtnPrimary';

const MakeService = () => {
    return (
        <div className="hero mt-16">
                <div className="hero-content flex-col lg:flex-row lg:pl-24">
                    <div className='px-16'>
                    <img src={treatment} className="rounded-lg lg:h-[576px]" alt=''/>
                    </div>
                    <div className='w-1/2 lg:mx-auto'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <BtnPrimary></BtnPrimary>
                    </div>
                </div>
            </div>
    );
};

export default MakeService;