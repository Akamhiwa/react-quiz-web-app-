import React from 'react'
import {  PostContext } from './assets/PostContext'
import QuizApp from './assets/QuizApp'
const App = () => {
 
 
  return (
    <PostContext>
     <QuizApp />
    </PostContext>
  )
}

export default App