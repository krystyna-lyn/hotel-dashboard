import { FiEdit, FiTrash } from "react-icons/fi";


function ActionButtons() {
    return (
        <div className="flex gap-2">
            <button className="p-2 rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition">
                <FiEdit />
            </button>
            <button className="p-2 rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition">
                <FiTrash />
            </button>
        </div>
    )
}
export default ActionButtons;