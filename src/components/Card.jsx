
const Card = ({ icon, title, value }) => {
    return (
        <div className='bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-4 dark:bg-gray-800 dark:text-white'>
            <h2 className='text-3xl text-gray-500'>{icon}</h2>
            <div>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='text-xl'>{value}</p>
            </div>
        </div>

    )
}

export default Card