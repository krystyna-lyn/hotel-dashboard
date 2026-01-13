import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

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
            <form className='mb-6 text-gray-900 p-2 text-lg font-semibold grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6' >
                <Input
                    type='text'
                    name='guest_name'
                    placeholder='Guest name'
                />
                <Input
                    type='text'
                    name='room_number'
                    placeholder='Room number' />
                <Input
                    type='date'
                    name='check_in'
                    placeholder='Check-in date' />
                <Input
                    type='date'
                    name='check_out'
                    placeholder='Check-out date' />

                <Select name='status'>
                    <option value={'confirmed'}>Confirmed</option>
                    <option value={'pending'}>Pending</option>
                    <option value={'cancelled'}>Cancelled</option>
                </Select>
                <button type='submit' className='p-2 w-full rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition'>Add Booking</button>
            </form>
        </div>
    )
}

export default BookingsForm