import React from 'react'

export const Avatar = ({text, size}) => {
  return (
    <>
      <div className={`relative inline-flex items-center justify-center ${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 hover:scale-110`}>
          <span className="font-medium text-gray-600 dark:text-gray-300">{text}</span>
      </div>
    </>
  )
}

export default Avatar