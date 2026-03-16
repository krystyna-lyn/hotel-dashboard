import ActionButtons from './ActionButtons'

const STATUS_CONFIG = {
    confirmed: {
        label: 'Confirmed',
        classes: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800',
    },
    pending: {
        label: 'Pending',
        classes: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800',
    },
    cancelled: {
        label: 'Cancelled',
        classes: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800',
    },
}

const ROOM_TYPE_LABEL = {
    single: 'Single',
    double: 'Double',
    suite: 'Suite',
}

const TableList = ({ bookings, setEditBooking, handleDelete }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    }

    const sorted = [...bookings]
        .filter(Boolean)
        .sort((a, b) => new Date(a.check_in) - new Date(b.check_in))

    return (
        <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-700/60">

            <table className="w-full table-auto border-collapse text-left">
                {/* Header */}
                <thead className="hidden md:table-header-group">
                    <tr className="bg-stone-50 dark:bg-stone-800/80 border-b border-stone-200 dark:border-stone-700/60">
                        {['Guest', 'Room', 'Room №', 'Check-in', 'Check-out', 'Status', ''].map((col) => (
                            <th
                                key={col}
                                className="
                  px-4 py-3
                  text-xs font-semibold
                  text-stone-500 dark:text-stone-400
                  uppercase tracking-wide
                  whitespace-nowrap
                "
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-stone-100 dark:divide-stone-700/40">
                    {sorted.length === 0 && (
                        <tr>
                            <td
                                colSpan={7}
                                className="px-4 py-10 text-center text-sm text-stone-400 dark:text-stone-500"
                            >
                                No bookings yet
                            </td>
                        </tr>
                    )}

                    {sorted.map((booking, index) => {
                        const status = STATUS_CONFIG[booking.status] || STATUS_CONFIG.pending
                        return (
                            <tr
                                key={booking.id || index}
                                className="
                  block md:table-row
                  bg-white dark:bg-stone-900
                  hover:bg-stone-50 dark:hover:bg-stone-800/60
                  rounded-xl md:rounded-none
                  shadow-sm md:shadow-none
                  mb-2 md:mb-0
                  transition-colors duration-100
                "
                            >
                                {/* Guest */}
                                <td className="flex md:table-cell items-center justify-between px-4 py-3">
                                    <span className="text-xs font-medium text-stone-400 md:hidden uppercase">Guest</span>
                                    <span className="text-sm font-medium text-stone-800 dark:text-stone-100">
                                        {booking.guest_name}
                                    </span>
                                </td>

                                {/* Room type */}
                                <td className="flex md:table-cell items-center justify-between px-4 py-3">
                                    <span className="text-xs font-medium text-stone-400 md:hidden uppercase">Room</span>
                                    <span className="text-sm text-stone-600 dark:text-stone-300 capitalize">
                                        {ROOM_TYPE_LABEL[booking.room_type] || booking.room_type}
                                        {booking.room_type === 'suite' && booking.spa && (
                                            <span className="ml-1.5 text-xs text-accent-500">+ Spa</span>
                                        )}
                                    </span>
                                </td>

                                {/* Room number */}
                                <td className="flex md:table-cell items-center justify-between px-4 py-3">
                                    <span className="text-xs font-medium text-stone-400 md:hidden uppercase">Room №</span>
                                    <span className="text-sm font-mono text-stone-600 dark:text-stone-300">
                                        {booking.room_number}
                                    </span>
                                </td>

                                {/* Check-in */}
                                <td className="flex md:table-cell items-center justify-between px-4 py-3">
                                    <span className="text-xs font-medium text-stone-400 md:hidden uppercase">Check-in</span>
                                    <span className="text-sm text-stone-600 dark:text-stone-300">
                                        {formatDate(booking.check_in)}
                                    </span>
                                </td>

                                {/* Check-out */}
                                <td className="flex md:table-cell items-center justify-between px-4 py-3">
                                    <span className="text-xs font-medium text-stone-400 md:hidden uppercase">Check-out</span>
                                    <span className="text-sm text-stone-600 dark:text-stone-300">
                                        {formatDate(booking.check_out)}
                                    </span>
                                </td>

                                {/* Status badge */}
                                <td className="flex md:table-cell items-center justify-between px-4 py-3">
                                    <span className="text-xs font-medium text-stone-400 md:hidden uppercase">Status</span>
                                    <span
                                        className={`
                      inline-flex items-center px-2.5 py-1
                      rounded-md text-xs font-medium
                      border
                      ${status.classes}
                    `}
                                    >
                                        {status.label}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="flex md:table-cell items-center justify-end px-3 py-3">
                                    <ActionButtons
                                        booking={booking}
                                        setEditBooking={setEditBooking}
                                        handleDelete={handleDelete}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableList
