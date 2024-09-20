//  eslint-disable react-refresh/only-export-components 
//   eslint-disable-next-line no-unused-vars
import React, {useEffect, useState,createContext, useContext } from 'react'
import supabase from '../services/supabase'
 const Context=createContext()
 
// eslint-disable-next-line react/prop-types
const QuizContext = ({children}) => {
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
      const fetchQuestions=async()=>{
        try {
          const { data, error } = await supabase
            .from('questions')  
            .select('*');       
          console.log(data);
          
          if (error) throw error;
  
          setQuestion(data);  
          setStatus('ready');  
        } catch (error) {
          console.error('Error fetching questions:', error);
          setStatus('error');  
        }
      }
      fetchQuestions()
    },[])
    
    
  return (
    <Context.Provider 
    value={{
    Question,
    setQuestion,
    status,
    setStatus,
    index,
    setIndex,
    answer,
    setAnswer,
    score,
    setScore,
    maxPossiblePoints
}}>
    {children}
</Context.Provider>
  )
}
const useQuiz=()=>{
    return useContext(Context)
}

// eslint-disable-next-line react-refresh/only-export-components
export {useQuiz,QuizContext}

// eslint-disable-next-line no-unused-vars
