import TableList from "../ui/TableList";

const Bookings = () => {
    return (
        <div className="text-2xl font-semibold mb-4">
            <p className="text-gray-900 mb-4 dark:text-white">Manage all your bookings here.</p>
            <TableList />
        </div>
    )
}

export default Bookings;