import ActionButtons from './ActionButtons'


const TableList = ({ bookings, setEditBooking }) => {


    return (
        <div className='overflow-x-auto sm:rounded-lg'>
            <table className='w-full table-auto border-collapse mb-6 text-left text-gray-900 p-4 text-lg font-semibold dark:text-white'>
                <thead className='hidden md:table-header-group'>
                    <tr className='bg-gray-200 dark:bg-gray-700 mb-2'>
                        <th className='p-3'>Guest</th>
                        <th className='p-3'>Room</th>
                        <th className='p-3'>Check-in</th>
                        <th className='p-3'>Check-out</th>
                        <th className='p-3'>Status</th>
                        <th className='p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index} className='block md:table-row bg-white dark:bg-gray-800 rounded-lg shadow-md mb-2'>
                            <td className='flex md:table-cell justify-between p-3'>{booking.guest_name}</td>
                            <td className='flex md:table-cell justify-between p-3'>{booking.room_number}</td>
                            <td className='flex md:table-cell justify-between p-3'>{booking.check_in.split('T')[0]}</td>
                            <td className='flex md:table-cell justify-between p-3'>{booking.check_out.split('T')[0]}</td>
                            <td className='flex md:table-cell justify-between p-3'>{booking.status}</td>
                            <td className='flex md:table-cell justify-end gap-2 p-3'>
                                <ActionButtons
                                    booking={booking}
                                    setEditBooking={setEditBooking} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableList