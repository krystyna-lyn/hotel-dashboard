import axios from 'axios';

const API_URL = 'http://localhost:5001/bookings';

export const createBooking = (data) => {
    return axios.post(API_URL, data);
}

export const getBookings = () => {
    return axios.get(API_URL);
}

export const updateBooking = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
}

