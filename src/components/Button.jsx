import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={`py-2 md:py-3 px-3 md:px-4 rounded-xl bg-secondary text-white cursor-pointer hover:text-blue-400 transition duration-300 ${className}`}>{children}</button>
  )
}

export default Button