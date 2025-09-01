import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[375px] bg-blue-400 rounded-xl p-5'>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-xm px-3 py-1 rounded'>{data.Category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="mt-4"><button className="bg-red-500 py-1 px-2 text-sm">Failed</button></div>
        </div>
  )
}

export default FailedTask