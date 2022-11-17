import React from 'react';

const InfoCart = ({cart}) => {
    const {name, icon, description, bgClass} = cart;
    return (
        <div className={`card md:card-side ${bgClass} shadow-xl p-6`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCart;