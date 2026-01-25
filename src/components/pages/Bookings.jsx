import { FiPlus } from "react-icons/fi";
import BookingsForm from "../ui/BookingsForm";
import TableList from "../ui/TableList";
import { useEffect, useState } from "react";

const Bookings = () => {

    const [editBooking, setEditBooking] = useState(null);


    useEffect(() => {
        console.log("Selected booking for edit:", editBooking);

    }, [editBooking])


    return (
        <div className="text-2xl font-semibold mb-4">
            <p className="text-gray-900 mb-4 dark:text-white">
                Manage all your bookings here
            </p>
            <TableList
                setEditBooking={setEditBooking}
            />
            <BookingsForm
                editBooking={editBooking}
                setEditBooking={setEditBooking}
            />
        </div>
    )
}

export default Bookings;