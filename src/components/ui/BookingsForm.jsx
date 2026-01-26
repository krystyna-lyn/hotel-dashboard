import { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select'
import { createBooking, updateBooking } from '../../services/bookingService'

const BookingsForm = ({ editBooking }) => {

    const [form, setForm] = useState({
        guest_name: '',
        room_number: '',
        check_in: '',
        check_out: '',
        status: 'confirmed'
    })
    //console.log("form:", form);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (editBooking) {
            setForm({
                guest_name: editBooking.guest_name,
                room_number: editBooking.room_number,
                check_in: editBooking.check_in.split('T')[0],
                check_out: editBooking.check_out.split('T')[0],
                status: editBooking.status
            })
        }
    }, [editBooking]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editBooking) {
            await updateBooking(editBooking.id, form);
        }
        else {
            await createBooking(form);
        }

        setForm({
            guest_name: '',
            room_number: '',
            check_in: '',
            check_out: '',
            status: 'confirmed'
        });
    };


    return (
        <div>
            <form className='mb-6 text-gray-900 p-2 text-lg font-semibold grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6'
                onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='guest_name'
                    placeholder='Guest name'
                    value={form.guest_name}
                    onChange={handleChange} />
                <Input
                    type='text'
                    name='room_number'
                    placeholder='Room number'
                    value={form.room_number}
                    onChange={handleChange} />
                <Input
                    type='date'
                    name='check_in'
                    placeholder='Check-in date'
                    value={form.check_in}
                    onChange={handleChange} />
                <Input
                    type='date'
                    name='check_out'
                    placeholder='Check-out date'
                    value={form.check_out}
                    onChange={handleChange} />

                <Select name='status'
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'confirmed'}>Confirmed</option>
                    <option value={'pending'}>Pending</option>
                    <option value={'cancelled'}>Cancelled</option>
                </Select>
                <button type="submit"
                    className='p-2 w-full rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition'
                >
                    {editBooking ? "Update Booking" : "Add Booking"}
                </button>

            </form>
        </div>
    )
}

export default BookingsForm