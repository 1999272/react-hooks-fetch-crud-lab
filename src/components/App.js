import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const API_URL = "http://localhost:4000/questions";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  // GET all questions when app loads
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  // POST - Add a new question
  function handleAddQuestion(newQuestion) {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    })
      .then((res) => res.json())
      .then((data) => setQuestions([...questions, data]));
  }

  // DELETE - Remove a question
  function handleDeleteQuestion(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setQuestions(questions.filter((q) => q.id !== id));
    });
  }

  // PATCH - Update correctIndex of a question
  function handleUpdateQuestion(id, correctIndex) {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex }),
    })
      .then((res) => res.json())
      .then((updatedQuestion) => {
        setQuestions((prev) =>
          prev.map((q) => (q.id === id ? updatedQuestion : q))
        );
      });
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDelete={handleDeleteQuestion}
          onUpdate={handleUpdateQuestion}
        />
      )}
    </main>
  );
}

export default App;

