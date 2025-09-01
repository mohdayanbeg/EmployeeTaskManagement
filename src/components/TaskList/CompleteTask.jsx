import React from 'react'

const CompleteTask = ({data}) => {

  return (
    <div className='flex-shrink-0 h-full w-[375px] bg-green-400 rounded-xl p-5'>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-xm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="mt-4"><button className="bg-red-500 text-sm px-2 py-1">Completed</button></div>
        </div>
  )
}

export default CompleteTask