import { FiEdit, FiTrash } from "react-icons/fi";


function ActionButtons({ booking, setEditBooking, handleDelete }) {

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setEditBooking(booking)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition">
                <FiEdit />
            </button>
            <button
                onClick={() => handleDelete(booking.id)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition">
                <FiTrash />
            </button>
        </div>
    )
}
export default ActionButtons;