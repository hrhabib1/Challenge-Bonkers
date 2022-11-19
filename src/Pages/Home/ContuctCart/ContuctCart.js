import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContuctCart = () => {
    return (
        <div className="hero bg-base-200 my-16" style= {{
            background : `url(${appointment})`
        }}>
            <div className="hero-content w-1/3">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ContuctCart;