import axios from 'axios'

export const OTPApiBaseURL = axios.create({
    baseURL: "http://localhost:3001/"
});