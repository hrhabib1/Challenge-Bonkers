import React from 'react';
import chair from '../../../assets/images/chair.png'
import chairbg from '../../../assets/images/bg.png'
import BtnPrimary from '../../../component/BtnPrimary/BtnPrimary';

const Banner = () => {
   
    return (
       <section  style= {{
        background : `url(${chairbg})`
    }}>
         <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <BtnPrimary></BtnPrimary>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Banner;