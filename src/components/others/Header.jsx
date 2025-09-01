import React, { useState, useEffect } from 'react'
import Login from '../Auth/login'

const Header = (props) => {
  const [username, setUsername] = useState('')
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
useEffect(() => {
    if (props?.data?.firstName) {
      setUsername(props.data.firstName)
    } else {
      setUsername('Admin')
    }
  }, [props.data])


  return (
    <div className='flex items-end justify-between m-2'>
        <div className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>{username} 👋</span> </div>
        <button 
        onClick={logOutUser}
        className='bg-red-500 text-white px-5 py-2 text-lg font-medium rounded-sm hover:bg-red-600'>Log out</button>
    </div>
  )
}

export default Header