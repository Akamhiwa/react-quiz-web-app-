import React, { useEffect, useState } from 'react'
import Loading from './assets/Loading'
import Error from './assets/Error'
import Header from './assets/Header'
import StartScreen from './assets/StartScreen'
import Timer from './assets/Timer'
import ProgressBar from './assets/ProgressBar'
import NextButton from './assets/NextButton'
import Questions from './assets/Questions'
import FinishScreen from "./assets/FinishScreen"
const App = () => {
  const [Question,setQuestion]=useState([])
  const [status,setStatus]=useState("loading")
  const [index,setIndex]=useState(0)
  const [answer,setAnswer]=useState(null)
  const [score,setScore]=useState(0)
  const maxPossiblePoints = Question.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  
 
useEffect(()=>{
  const FetchAPi=async()=>{
    try {
      const resp=await fetch("http://localhost:9000/questions")
      const data=await resp.json()
      setQuestion(data)
      setStatus("ready")
    } catch (error) {
      setStatus("error")
    }
  }
  FetchAPi()
},[])
  return (
    
      <div className='md:px-[10%] lg:px-[20%] xl:px-[30%] p-4 '>
        <div className=' '>
        <Header />
        {status==="loading" && (<Loading />)}
        { status==="error"&& (<Error />)} 
        {status ==="ready" && (<StartScreen setStatus={setStatus}  Question={Question}/>)}
        {status==="active" && (
          <div className='flex flex-col gap-8 text-white mt-[26px] px-2 '>
              <ProgressBar  Question={Question} score={score} anwer={answer} maxPossiblePoints={maxPossiblePoints} index={index}/>
              <div className='flex flex-col md:gap-12 gap-6 '>
              <Questions Question={Question}  index={index} answer={answer} setAnswer={setAnswer} setScore={setScore} />
              <div className='flex justify-between items-center'>
                <Timer Question={Question} setStatus={setStatus}/>
                <NextButton setAnswer={setAnswer} setIndex={setIndex} Question={Question} answer={answer} setScore={setScore} index={index} setStatus={setStatus} />
              </div>
              </div>
          </div>
        )
        }
        {status==="finished" && (
          <FinishScreen score={score} setStatus={setStatus} setIndex={setIndex} maxPossiblePoints={maxPossiblePoints} setAnswer={setAnswer} setScore={setScore}/>
        )}
        </div>
      </div>
  
  )
}

export default App