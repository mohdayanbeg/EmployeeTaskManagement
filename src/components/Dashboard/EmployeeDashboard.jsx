import React from 'react'
import Header from '../others/Header'
import TaskNumberCard from '../others/TaskNumberCard'
import TaskList from '../TaskList/TaskLIst'


const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumberCard data={props.data}/> 
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard