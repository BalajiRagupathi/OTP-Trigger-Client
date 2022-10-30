import React, { Suspense, useState } from "react";
import { sendSMS } from "../../pages/users/action";
import Loading from "../common/Loading/Loading";
import "./UserDetails.css"

const UserDetails = (props) => {

    const [message,setMessage] = useState(`Hi ${props.firstName} , Your OTP is ${Math.floor(Math.random() * (9999 - 1000) + 1000)}`);
    const [isLoading,setIsLoading] = useState(false);
    let [toggleModel,setToggleModel] = useState(false);

    const triggerOTP = async () => {
        try {
            setIsLoading(true);
            await sendSMS(message,props.id);
            setIsLoading(false);
            setToggleModel(false)
        } catch (e) {
            setMessage({error: e.message});
        }
    }

    return (
        <Suspense fallback={<Loading/>}>
            { isLoading ? <Loading/> :
                <>
                    <div className="card" >
                        <div className="back" onClick={() => props.toggleViewUser(null)} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="black">
                            <path 
                                d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
                            />
                        </svg>
                        </div>
                        <div className="profile-picture" >
                            <img src={props.image} alt={props.firstName} width="100%" />
                        </div>
                        <h1>{`${props.firstName} ${props.lastName}`}</h1>
                        <p>{props.phone}</p>
                        <p>{props.email}</p>
                        <p>{props.blooadGroup}</p>
                        <button 
                            onClick={() => {
                                setMessage(`Hi ${props.firstName} , Your OTP is ${Math.floor(Math.random() * (9999 - 1000) + 1000)}`);
                                setToggleModel(!toggleModel)
                            }}>Generate OTP</button>
                    </div>
                    <div className="modal" style={{display: toggleModel ? "flex": "none"}} >
                        <div className="modal-content">
                            <textarea className="model-message" rows="2" cols="40" value={message} disabled/>
                            <div className="model-btn" >
                                <button className="send-btn" onClick={triggerOTP} >Send</button>
                                <button className="close-btn" onClick={() => setToggleModel(!toggleModel) } >Cancel</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </Suspense>
    )
}

export default UserDetails;