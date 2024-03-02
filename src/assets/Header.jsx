import React from 'react'
import Logo from "../../public/react logo.png"
const Header = () => {
  return (
    <div className='flex justify-between items-center md:px-4 gap-2'>
        <img src={Logo} alt="react logo" className='size-28 md:size-32' />
        <h1 className='text-4xl  md:text-5xl text-white font-bold font-primary'>the react quiz</h1>
    </div>
  )
}

export default Header