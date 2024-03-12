import React, {useEffect, useState,createContext, useContext } from 'react'
 const Context=createContext()
const PostContext = ({children}) => {
   
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
    },[setQuestion,setStatus])
    
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

export {useQuiz,PostContext}