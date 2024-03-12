import {  useQuiz } from './PostContext';
const NextButton = () => {
    const {Question,index,setIndex,setStatus,answer,setAnswer}=useQuiz()

 return(
    <>
        {index===Question.length-1 &&(
            <button className='py-3 text-xl px-7 bg-opacity-20 bg-[#A69C9C] hover:bg-transparent hover:border-2 hover:border-[#F4EEEE] rounded-full hover:border-opacity-20 ' onClick={()=>{
                    setStatus("finished")
            }}>finished</button>
        )}
        {index<Question.length-1 && answer!==null && (
            <button className='py-3 text-xl px-7 bg-opacity-20 bg-[#A69C9C] hover:bg-transparent hover:border-2 hover:border-[#F4EEEE] rounded-full hover:border-opacity-20 '
            onClick={()=>{
                setIndex(prevValue=>prevValue+1)
                setAnswer(null)
            }}
            > next </button>
        )}
    </>
    
 )
}

export default NextButton