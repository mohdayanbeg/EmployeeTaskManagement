import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[375px] bg-fuchsia-400 rounded-xl p-5'>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-xm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="flex justify-between mt-4 items-end">
                <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
                </div>
        </div>
  )
}

export default NewTask