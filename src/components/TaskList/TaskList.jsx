import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTAsk'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='overflow-x-auto h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap my-0.5'>
        {data.tasks.map((e,idx)=>{
        if(e.active){
            return <AcceptTask key={idx} data={e}/>
        }
        if(e.newTask){
            return <NewTask key={idx} data={e}/>
        }
        if(e.completed){
            return <CompleteTask key={idx} data={e}/>
        }
        if(e.failed){
            return <FailedTask key={idx} data={e}/>
        }
        })}
        
    </div>
  )
}

export default TaskList