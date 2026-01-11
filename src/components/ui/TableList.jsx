import React from 'react'
import { FiDelete, FiEdit, FiTrash } from 'react-icons/fi'
import ActionButtons from './ActionButtons'


const TableList = () => {
    return (
        <div className='overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full table-auto border-separate border-spacing-y-2  text-left text-gray-900 p-4 text-lg font-semibold dark:text-white'>
                <thead className='hidden md:table-header-group'>
                    <tr className='bg-gray-200 dark:bg-gray-700 mb-2'>
                        <th className='p-3'>Guest</th>
                        <th className='p-3'>Room</th>
                        <th className='p-3'>Check-in</th>
                        <th className='p-3'>Check-out</th>
                        <th className='p-3'>Status</th>
                        <th className='p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='block md:table-row bg-white dark:bg-gray-800 rounded-lg shadow-md mb-2'>
                        <td className='flex md:table-cell justify-between p-3' data-label='Guest'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Guest</span>
                            John Doe
                        </td>

                        <td className='flex md:table-cell justify-between p-3' data-label='Room'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Room</span>
                            101
                        </td>
                        <td className='flex md:table-cell justify-between p-3' data-label='Check-in' >
                            <span className='md:hidden text-gray-900 dark:text-white'>Check-in</span>
                            2024-07-01
                        </td>
                        <td className='flex md:table-cell justify-between p-3' data-label='Check-out'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Check-out</span>
                            2024-07-05
                        </td>
                        <td className='flex md:table-cell justify-between p-3' data-label='Status'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Status</span>
                            Confirmed
                        </td>
                        <td className='flex md:table-cell justify-end gap-2 p-3' data-label='Actions' >
                            <ActionButtons />
                        </td>
                    </tr>
                    <tr className='block md:table-row bg-white dark:bg-gray-800 rounded-lg shadow-md mb-2'>
                        <td className='flex md:table-cell justify-between p-3' data-label='Guest'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Guest</span>
                            Jane Smith
                        </td>

                        <td className='flex md:table-cell justify-between p-3' data-label='Room'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Room</span>
                            202
                        </td>
                        <td className='flex md:table-cell justify-between p-3' data-label='Check-in' >
                            <span className='md:hidden text-gray-900 dark:text-white'>Check-in</span>
                            2024-07-03
                        </td>
                        <td className='flex md:table-cell justify-between p-3' data-label='Check-out'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Check-out</span>
                            2024-07-07
                        </td>
                        <td className='flex md:table-cell justify-between p-3' data-label='Status'>
                            <span className='md:hidden text-gray-900 dark:text-white'>Status</span>
                            Checked-in
                        </td>
                        <td className='flex md:table-cell justify-end gap-2 p-3' data-label='Actions' >
                            <ActionButtons />
                        </td>
                    </tr>

                </tbody>
            </table>


        </div>

    )
}

export default TableList