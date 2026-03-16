import { useEffect } from 'react'
import Input from './Input'
import Select from './Select'
import { createBooking, updateBooking } from '../../services/bookingService'
import { bookingSchema } from '../../services/bookingSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiPlus, FiCheck } from 'react-icons/fi'

const BookingsForm = ({ bookings, setBookings, editBooking, setEditBooking, refreshBookings }) => {
  const today = new Date().toISOString().split('T')[0]

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    mode: 'onChange',
    defaultValues: {
      guest_name: '',
      room_type: '',
      room_number: '',
      check_in: today,
      check_out: today,
      spa: false,
      status: 'confirmed',
    },
  })

  const roomType = watch('room_type')
  const checkIn = watch('check_in')
  const checkOut = watch('check_out')

  useEffect(() => {
    if (roomType !== 'suite') {
      setValue('spa', false)
    }
  }, [roomType, setValue])

  useEffect(() => {
    if (checkOut && checkOut < checkIn) {
      setValue('check_out', checkIn)
    }
  }, [roomType, checkIn, checkOut, reset, setValue])

  useEffect(() => {
    if (editBooking) {
      reset({
        guest_name: editBooking.guest_name,
        room_type: editBooking.room_type,
        room_number: editBooking.room_number,
        check_in: editBooking.check_in.split('T')[0],
        check_out: editBooking.check_out.split('T')[0],
        spa: editBooking.spa === true || editBooking.spa === 'true',
        status: editBooking.status,
      })
    }
  }, [editBooking, reset])

  const onSubmit = async (data) => {
    try {
      if (data.room_type !== 'suite') data.spa = false

      if (editBooking) {
        const response = await updateBooking(editBooking.id, data)
        const updated = bookings.map((b) => (b.id === editBooking.id ? response.data : b))
        setBookings(updated)
        setEditBooking(null)
      } else {
        const response = await createBooking(data)
        setBookings([...bookings, response.data])
      }

      reset({
        guest_name: '',
        room_type: '',
        room_number: '',
        check_in: today,
        check_out: today,
        spa: false,
        status: 'confirmed',
      })
      refreshBookings()
    } catch (error) {
      console.error('Error:', error)
      alert(error.response?.data?.message || 'An error occurred. Please try again.')
    }
  }

  return (
    <div className="mb-8">
      {/* Form header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-1 h-5 rounded-full bg-accent-500" />
        <h2 className="text-sm font-semibold text-stone-700 uppercase tracking-wide">
          {editBooking ? 'Edit Booking' : 'New Booking'}
        </h2>
        {editBooking && (
          <button
            type="button"
            onClick={() => {
              setEditBooking(null)
              reset()
            }}
            className="ml-auto text-xs text-stone-400 hover:text-stone-600 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8"
      >
        {/* Guest name */}
        <div className="sm:col-span-2">
          <Input
            type="text"
            label="Guest name"
            placeholder="Full name"
            error={errors.guest_name?.message}
            {...register('guest_name')}
          />
        </div>

        {/* Room type */}
        <div>
          <Select
            label="Room type"
            error={errors.room_type?.message}
            {...register('room_type')}
          >
            <option value="">Select type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </Select>
        </div>

        {/* Spa — only for suite */}
        {roomType === 'suite' && (
          <div>
            <Select
              label="Spa"
              error={errors.spa?.message}
              {...register('spa', { setValueAs: (v) => v === 'true' })}
            >
              <option value="">Included?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </div>
        )}

        {/* Room number */}
        <div>
          <Input
            type="number"
            label="Room №"
            placeholder="101"
            error={errors.room_number?.message}
            {...register('room_number', { valueAsNumber: true })}
          />
        </div>

        {/* Check-in */}
        <div>
          <Input
            type="date"
            label="Check-in"
            error={errors.check_in?.message}
            min={today}
            {...register('check_in')}
          />
        </div>

        {/* Check-out */}
        <div>
          <Input
            type="date"
            label="Check-out"
            error={errors.check_out?.message}
            min={checkIn}
            {...register('check_out')}
          />
        </div>

        {/* Status */}
        <div>
          <Select
            label="Status"
            error={errors.status?.message}
            {...register('status')}
          >
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </Select>
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <button
            type="submit"
            className="
              w-full flex items-center justify-center gap-2
              px-4 py-2.5
              rounded-lg
              bg-accent-500 text-white
              text-sm font-medium
              hover:bg-accent-600
              active:scale-[0.98]
              transition-all duration-150
              shadow-sm
            "
          >
            {editBooking ? (
              <>
                <FiCheck size={14} />
                Update
              </>
            ) : (
              <>
                <FiPlus size={14} />
                Add
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookingsForm
