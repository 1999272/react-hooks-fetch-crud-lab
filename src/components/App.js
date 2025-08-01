import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, updateQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => updateQuestions(data))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} updateQuestions={updateQuestions}/> : <QuestionList questions={questions} setQuestions={updateQuestions} />}
    </main>
  );
}

export default App;