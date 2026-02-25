import { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select'
import { createBooking, updateBooking } from '../../services/bookingService'
import { bookingSchema } from '../../services/bookingSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


const BookingsForm = ({ bookings, setBookings, editBooking, setEditBooking, refreshBookings }) => {

    const today = new Date().toISOString().split("T")[0];

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(bookingSchema),
        mode: "onChange",
        defaultValues: {
            guest_name: '',
            room_type: '',
            room_number: '',
            check_in: today,
            check_out: today,
            spa: false,
            status: 'confirmed'
        }
    });
    //dynamic field
    const roomType = watch("room_type");
    const checkIn = watch("check_in");
    const checkOut = watch("check_out");

    // edit mode


    useEffect(() => {
        // если тип комнаты не suite → spa всегда false
        if (roomType !== "suite") {
            setValue("spa", false);
        }

        // если checkout раньше checkin → исправляем
        if (checkOut && checkOut < checkIn) {
            setValue("check_out", checkIn);
        }

        // edit mode
        if (editBooking) {
            reset({
                guest_name: editBooking.guest_name,
                room_type: editBooking.room_type,
                room_number: editBooking.room_number,
                check_in: editBooking.check_in.split("T")[0],
                check_out: editBooking.check_out.split("T")[0],
                spa: editBooking.spa,
                status: editBooking.status
            });
        }
    }, [editBooking, roomType, checkIn, checkOut, reset, setValue]);




    // submit

    const onSubmit = async (data) => {



        try {
            if (data.room_type !== "suite") {
                data.spa = false;
            }

            if (editBooking) {
                const response = await updateBooking(editBooking.id, data);

                const updated = bookings.map(booking => booking.id === editBooking.id ? response.data : booking)

                setBookings(updated);
                setEditBooking(null);
            }

            else {
                const response = await createBooking(data);
                setBookings([...bookings, response.data]);
            }
            reset({
                guest_name: '',
                room_type: '',
                room_number: '',
                check_in: today,
                check_out: today,
                spa: false,
                status: 'confirmed'
            });
            refreshBookings();
        } catch (error) {

            // errors from backend 

            console.error("Error:", error);
            alert(error.response?.data?.message || "An error occurred. Please try again.");
        }


        console.log(typeof data.spa);

    }


    return (
        <div>
            <form className='mb-6 text-gray-900 p-2 text-lg font-semibold grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6'
                onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    name='guest_name'
                    {...register("guest_name")}
                />
                {errors.guest_name && <p>{errors.guest_name.message}</p>}

                <Select {...register("room_type")}
                >
                    <option value="">Select room type</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="suite">Suite</option>
                </Select>
                {errors.room_type && <p>{errors.room_type.message}</p>}

                {roomType === "suite" && (
                    <Select {...register("spa", {
                        setValueAs: v => v === "true"
                    })}>
                        <option value="">Spa included?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Select>
                )}
                {errors.spa && <p>{errors.spa.message}</p>}

                <Input
                    type='number'
                    placeholder='Room number'
                    {...register("room_number", { valueAsNumber: true })}
                />
                <Input type='date'{...register("check_in")} min={today} />
                <Input type='date' {...register("check_out")} min={checkIn} />

                {errors.check_out && <p>{errors.check_out.message}</p>}

                <Select {...register("status")}
                >
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                </Select>

                <button className='p-2 w-full rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition'
                >
                    {editBooking ? "Update Booking" : "Add Booking"}
                </button>

            </form>
        </div>
    )
}

export default BookingsForm