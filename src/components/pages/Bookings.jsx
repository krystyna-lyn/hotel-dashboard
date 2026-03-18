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
        const filtered = bookings.filter((booking) => booking.id !== id);
        setBookings(filtered);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-50 tracking-tight">
                    Bookings
                </h1>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                    Manage all your guest reservations.
                </p>
            </div>
            <BookingsForm
                bookings={bookings}
                setBookings={setBookings}
                editBooking={editBooking}
                setEditBooking={setEditBooking}
                refreshBookings={fetchBookings}
            />
            <TableList
                bookings={bookings}
                setEditBooking={setEditBooking}
                handleDelete={handleDelete}
            />

        </div>
    );
}

export default Bookings;