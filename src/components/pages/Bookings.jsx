import { FiPlus } from "react-icons/fi";
import BookingsForm from "../ui/BookingsForm";
import TableList from "../ui/TableList";
import { useEffect, useState } from "react";
import { getBookings } from "../../services/bookingService";
import { deleteBooking } from "../../services/bookingService";

const Bookings = () => {

    const [bookings, setBookings] = useState([]);
    const [editBooking, setEditBooking] = useState(null);

    const fetchBookings = async () => {
        const response = await getBookings();
        setBookings(response.data);
    };

    useEffect(() => {

        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        await deleteBooking(id);
        const filtered = bookings.filter(booking => booking.id !== id);
        setBookings(filtered);
    }

    console.log("bookings:", bookings);

    return (
        <div className="text-2xl font-semibold mb-4">
            <p className="text-gray-900 mb-4 dark:text-white">
                Manage all your bookings here
            </p>
            <TableList
                bookings={bookings}
                setEditBooking={setEditBooking}
                handleDelete={handleDelete}
            />
            <BookingsForm
                bookings={bookings}
                setBookings={setBookings}
                editBooking={editBooking}
                setEditBooking={setEditBooking}
                refreshBookings={fetchBookings}
            />
        </div>
    )
}

export default Bookings;