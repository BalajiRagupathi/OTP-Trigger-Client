import axios from 'axios'

export const OTPApiBaseURL = axios.create({
    baseURL: "https://otp-trigger.herokuapp.com/"
});