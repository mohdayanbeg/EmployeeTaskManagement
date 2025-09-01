import React from 'react'

const TaskNumberCard = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-red-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-blue-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-2xl font-semibold'>Active Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-fuchsia-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-2xl font-semibold'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-green-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumberCard