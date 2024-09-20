import { useQuiz } from './QuizContext';
const StartScreen = () => {
  const {Question,setStatus}=useQuiz()
    const numQuestions=Question.length;
  return (
    <div className='flex items-center justify-center flex-col gap-12 text-white md:mt-[40px] mt-[30px]'>
        <div className='flex flex-col items-center justify-center gap-6'>
        <h1 className='text-3xl text-center font-primary font-bold'>welcome to the react quiz app</h1>
        <p className='font-primary text-center text-xl'>we have <span>{numQuestions}</span> question for you to test your React knowledge </p>
        </div>
        <button className='py-3 text-xl px-12 bg-opacity-20 bg-[#F4EEEE] hover:bg-transparent hover:border-2 hover:border-[#F4EEEE] rounded-full hover:border-opacity-20 ' 
        onClick={()=>{setStatus("active")}}>Start</button>

    </div>
  )
}

export default StartScreen