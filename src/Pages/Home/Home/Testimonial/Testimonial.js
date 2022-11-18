import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import TestimonialCart from './TestimonialCart';


const Testimonial = () => {
    const testimonialCarts = [
        {
            _id: 1,
            name: 'Winson Herry',
            distric: 'California',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nisi esse iste magnam blanditiis fugiat, molestiae nemo doloribus aliquam ratione aut ad, libero eveniet aperiam minima debitis sit neque est.',
            img: people1,

        },
        {
            _id: 2,
            name: 'Maria Herry',
            distric: 'California',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nisi esse iste magnam blanditiis fugiat, molestiae nemo doloribus aliquam ratione aut ad, libero eveniet aperiam minima debitis sit neque est.',
            img: people2,

        },
        {
            _id: 3,
            name: 'Fariya Herry',
            distric: 'California',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nisi esse iste magnam blanditiis fugiat, molestiae nemo doloribus aliquam ratione aut ad, libero eveniet aperiam minima debitis sit neque est.',
            img: people3,

        },
    ]
    return (
        <section className='mt-16'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-xl text-primary font-bold'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
               <div>
               <img className='lg:max-h-40 lg:max-w-48 max-h-20 max-w-24' src={quote} alt="" />
               </div>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
               {
                testimonialCarts.map(userReview =><TestimonialCart
                key={userReview._id}
                userReview={userReview}
                ></TestimonialCart>)
               }
            </div>
        </section>
    );
};

export default Testimonial;