import React from 'react';

const TestimonialCart = ({ userReview }) => {
    const { review, img, name, distric } = userReview;
    return (
        <div className="card p-5 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions justify-start items-center">
                    <div className="avatar mr-5 my-8">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div>
                        <h1>{name}</h1>
                        <h1>{distric}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;