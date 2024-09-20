import Loading from '../assets/Loading'
import Error from '../assets/Error'
import Header from '../assets/Header'
import StartScreen from '../assets/StartScreen'
import Timer from '../assets/Timer'
import ProgressBar from '../assets/ProgressBar'
import NextButton from '../assets/NextButton'
import Questions from '../assets/Questions'
import FinishScreen from "../assets/FinishScreen"
import {  useQuiz } from './QuizContext'
const QuizApp = () => {
    const {status}=useQuiz();
   
  return (
    <div className='md:px-[10%] lg:px-[20%] xl:px-[30%] p-4 '>
    <div >
    <Header />
    {status==="loading" && (<Loading />)}
    { status==="error"&& (<Error />)} 
    {status ==="ready" && (<StartScreen />)}
    {status==="active" && (
      <div className='flex flex-col gap-8 text-white mt-[26px] px-2 '>
          <ProgressBar />
          <div className='flex flex-col md:gap-12 gap-6 '>
          <Questions />
          <div className='flex justify-between items-center'>
            <Timer />
            <NextButton  />
          </div>
          </div>
      </div>
    )
    }
    {status==="finished" && (
      <FinishScreen />
    )}
  
    </div>
  </div>
  )
}

export default QuizApp