import axios from 'axios';

const API_URL = 'http://localhost:5001/bookings';

export const createBooking = (bookingData) => {
    return axios.post(API_URL, bookingData);
}

export const getBookings = () => {
    return axios.get(API_URL);
}
