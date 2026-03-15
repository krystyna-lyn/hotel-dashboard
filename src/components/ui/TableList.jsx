import ActionButtons from './ActionButtons'


const TableList = ({ bookings, setEditBooking, handleDelete }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };


    return (
        <div className='overflow-x-auto sm:rounded-lg'>
            <table className='w-full table-auto border-collapse mb-6 text-left text-gray-900 p-4 text-lg font-semibold dark:text-white'>
                <thead className='hidden md:table-header-group'>
                    <tr className='bg-gray-200 dark:bg-gray-700 mb-2'>
                        <th className='p-3'>Guest</th>
                        <th className='p-3'>Room</th>
                        <th className='p-3'>Room N°</th>
                        <th className='p-3'>Check-in</th>
                        <th className='p-3'>Check-out</th>
                        <th className='p-3'>Status</th>
                        <th className='p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings
                        .filter(Boolean)
                        .sort((a, b) => new Date(a.check_in) - new Date(b.check_in))
                        .map((booking, index) => (
                            <tr key={index} className='block md:table-row bg-white dark:bg-gray-800 rounded-lg shadow-md mb-2'>
                                <td className='flex md:table-cell justify-between p-3'>{booking.guest_name}</td>
                                <td className='flex md:table-cell justify-between p-3'>{booking.room_type}</td>
                                <td className='flex md:table-cell justify-between p-3'>{booking.room_number}</td>
                                <td className='flex md:table-cell justify-between p-3'>{formatDate(booking.check_in)}</td>
                                <td className='flex md:table-cell justify-between p-3'>{formatDate(booking.check_out)}</td>
                                <td className='flex md:table-cell justify-between p-3'>{booking.status}</td>
                                <td className='flex md:table-cell justify-end gap-2 p-3'>
                                    <ActionButtons
                                        booking={booking}
                                        setEditBooking={setEditBooking}
                                        handleDelete={handleDelete} />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableList