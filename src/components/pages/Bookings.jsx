import { FiPlus } from "react-icons/fi";
import BookingsForm from "../ui/BookingsForm";
import TableList from "../ui/TableList";
import { useEffect, useState } from "react";

const Bookings = () => {

    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        if (selectedBooking) {
            console.log("Selected booking changed:", selectedBooking);
        }
    }, [selectedBooking])


    return (
        <div className="text-2xl font-semibold mb-4">
            <p className="text-gray-900 mb-4 dark:text-white">
                Manage all your bookings here
            </p>
            <TableList selectedBooking={selectedBooking}
                setSelectedBooking={setSelectedBooking} />
            <BookingsForm
                selectedBooking={selectedBooking}
                setSelectedBooking={setSelectedBooking}
            />
        </div>
    )
}

export default Bookings;