import React, { useState } from 'react';
import './reservation.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Reservation = () => {
    const [details, setDetails] = useState({
        name: "",
        phoneNumber: "",
        NoOfPeoples: "",
        Time: ""
    });
    console.log(details);
    
    const { name, phoneNumber, NoOfPeoples, Time } = details;
    console.log(name, phoneNumber, NoOfPeoples, Time);
    const notify = () => {
        if(name && phoneNumber && NoOfPeoples && Time)(
            toast.success('Your seat is reserved')
        );else{
            alert("Fill the form Completely")
        }
        
    };

    return (
        <div className='row' style={{ marginTop: "90px", marginBottom: "90px" }}>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <div className='bg-dark p-5' style={{ borderRadius: "200px 200px 300px 500px" }}>
                    <div className='text-center text-light mb-5 head'>
                        RESERVE YOUR <br /> SEAT NOW!!!
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input
                            value={details.name}
                            onChange={e => setDetails({ ...details, name: e.target.value })}
                            type="text"
                            className='form-control w-75 p-3 rounded mb-5'
                            placeholder='Your name...'
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input
                            value={details.phoneNumber}
                            onChange={e => setDetails({ ...details, phoneNumber: e.target.value })}
                            type="text"
                            className='form-control w-75 p-3 rounded mb-5'
                            placeholder='Phone Number...'
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input
                            value={details.NoOfPeoples}
                            onChange={e => setDetails({ ...details, NoOfPeoples: e.target.value })}
                            type="text"
                            className='form-control w-75 p-3 rounded mb-5'
                            placeholder='No. of peoples'
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input
                            value={details.Time}
                            onChange={e => setDetails({ ...details, Time: e.target.value })}
                            type="text"
                            className='form-control w-75 p-3 rounded mb-5'
                            placeholder='Time'
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button onClick={notify} className='btn btn-outline-light p-3 fw-bold'>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3"></div>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Reservation;
