import {  useQuiz } from './QuizContext'
const ProgressBar = () => {
  const {Question,index,score,answer,maxPossiblePoints}=useQuiz()
  return (
    <div className='mt-5 '>
        <progress className='w-full h-3.5  rounded-full relative' 
        max={Question.length} 
        value={index + Number(answer!==null)}>
        </progress>
        <div className='flex w-full justify-between pt-1'>
            <p>Question {index+1} / {Question.length}</p>
            <p> {score} / {maxPossiblePoints}</p>
        </div>
    </div>
  )
}

export default ProgressBar