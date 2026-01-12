import React, { useState } from 'react'

const BookingsForm = () => {
    const [form, setForm] = useState({
        guest: '',
        room: '',
        check_in: '',
        check_out: '',
        status: 'confirmed'
    })



    return (
        <div>
            <form className='mb-6 text-gray-900 p-4 text-lg font-semibold grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6' >
                <input
                    type='text'
                    name='guest_name'
                    placeholder='Guest name' />
                <input
                    type='text'
                    name='room_number'
                    placeholder='Room number' />
                <input
                    type='date'
                    name='check_in'
                    placeholder='Check-in date' />
                <input
                    type='date'
                    name='check_out'
                    placeholder='Check-out date' />

                <select name='status'>
                    <option value={'confirmed'}>Confirmed</option>
                    <option value={'pending'}>Pending</option>
                    <option value={'cancelled'}>Cancelled</option>
                </select>
                <button type='submit' className='p-2 w-full rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition'>Add Booking</button>
            </form>
        </div>
    )
}

export default BookingsForm