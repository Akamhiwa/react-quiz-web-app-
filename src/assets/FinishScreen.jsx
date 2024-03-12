import {  useQuiz } from './PostContext';
const FinishScreen = () => {
  const {score,setStatus,setIndex,setScore,setAnswer,maxPossiblePoints}=useQuiz()

  const percentage = (score / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className='pt-12'>
      <p className="bg-yellow-400 font-primary rounded-full text-center py-4 md:py-8 px-0 text-2xl font-semibold mb-8">
        <span>{emoji}</span> You scored <strong>{score}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <div className='flex justify-end'>
      <button
        className="py-3 text-xl px-12 bg-opacity-20 bg-[#A69C9C] text-white hover:bg-transparent hover:border-2 hover:border-[#F4EEEE] rounded-full hover:border-opacity-20  "
        onClick={() => {
           setStatus("ready")
           setIndex(0)
           setAnswer(null)
           setScore(0)
          }}
      >
        Restart quiz
      </button>
      </div>
    </div>
  );
}

export default FinishScreen