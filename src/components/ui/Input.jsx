import React from 'react'

const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}

      className={`
        w-full
        px-3 py-2
        rounded
        bg-white
        text-gray-900
        border
        border-gray-300
        focus:outline-none
        focus:ring-2
        focus:ring-gray-900
        dark:bg-gray-800
        dark:text-white
        dark:border-gray-600
        ${className}
      `}
    />
  )
}

export default Input