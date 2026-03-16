import { FiEdit2, FiTrash2 } from "react-icons/fi";

function ActionButtons({ booking, setEditBooking, handleDelete }) {
  return (
    <div className="flex gap-1.5">
      <button
        onClick={() => setEditBooking(booking)}
        title="Edit booking"
        className="
          p-2 rounded-lg
          text-stone-400
          hover:text-accent-500 hover:bg-accent-50
          dark:hover:text-accent-400 dark:hover:bg-accent-700/20
          transition-all duration-150
        "
      >
        <FiEdit2 size={15} />
      </button>
      <button
        onClick={() => handleDelete(booking.id)}
        title="Delete booking"
        className="
          p-2 rounded-lg
          text-stone-400
          hover:text-red-500 hover:bg-red-50
          dark:hover:text-red-400 dark:hover:bg-red-900/20
          transition-all duration-150
        "
      >
        <FiTrash2 size={15} />
      </button>
    </div>
  );
}

export default ActionButtons;
