import QuestionItem from "./QuestionItem"

function QuestionList({questions, setQuestions}) {  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return <QuestionItem key={question.id} question={question} questions={questions} setQuestions={setQuestions}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;