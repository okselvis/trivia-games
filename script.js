// create a variable for the question and answer
const  questions = [
 {
  question: 'whats the tallest mountain in the world?',
  answer: "everest",
  score: 5
 },
 {
  question: 'the I in ighub stands for what?',
  answer: "innovation",
  score: 5
 },
 {
  question: 'what food ingredient enhances taste?',
  answer: "salt",
  score: 4
 },
 {
  question: 'what event is celebrated in december?',
  answer: "christmas",
  score: 8
 }
]

let totalScore = 0;

for (let i = 0; i < questions.length; i++) {
  const x = questions[i]
  const userinput = prompt(x.question)

  if (userinput === x.answer){
   alert(`Correct! Your score is ${totalScore + x.score}`)

   totalScore = totalScore + x.score
  }else{
   alert (`Nope! The correct answer is ${x.answer}. Your score is`)
  }
}