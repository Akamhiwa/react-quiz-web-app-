import {  useQuiz } from './QuizContext';
const Questions = () => {
  const {Question,index,setAnswer,answer,setScore}=useQuiz()

  const hasAnswered=answer!==null
  return (
    <div className='flex flex-col gap-8  '>
      <h1 className='text-center text-2xl font-semibold md:text-3xl'> {Question[index].question}</h1>
      <div className='flex flex-col gap-4'>
        {Question[index].options.map((option,i)=>(
          <button
          className={`w-full h-12 text-lg md:text-xl flex items-center font-primary  px-7 rounded-full transition-translate duration-200
          ${i===answer ? "translate-x-4 ":""} 
          ${hasAnswered ? i===Question[index].correctOption ? "bg-[#1098ad]":"bg-[#ffa94d] text-black" :""}
         ${hasAnswered ?" cursor-not-allowed":" hover:bg-transparent hover:border-2 hover:border-slate-400 hover:translate-x-4 bg-[#A69C9C] bg-opacity-20"}`}
           key={i} 
           onClick={()=>{
            setAnswer(i)
            if(i===Question[index].correctOption){
              setScore(prevValue=>prevValue+Question[index].points) 
          }
          }} 
           disabled={hasAnswered}>
            {option}
          </button>
        ))}

      </div>
     
    </div>
  )
}

export default Questions