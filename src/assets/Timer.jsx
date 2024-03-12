import React, {  useEffect, useState } from 'react'
import { useQuiz } from './PostContext';
const Timer = () => {
  const {Question,setStatus}=useQuiz()

  const [secondsRemaining,setSecondsRemaining]=useState(Question.length * 30)
  const min = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  
  useEffect(()=>{
   const intervalId=setInterval(()=>{
    setSecondsRemaining((prevValue)=>prevValue-1)

    },1000)
    return ()=>{clearInterval(intervalId)}
  },[])
  if(secondsRemaining===0){
    setStatus("finished")
  }
  return (
    <div className='py-3  md:text-xl px-6 bg-opacity-20  border border-[#F4EEEE] rounded-full hover:border-opacity-20'>
      <p>{min<10 && "0"}{min} : {seconds<10 &&"0"}{seconds} </p>
    </div>
  )
}

export default Timer