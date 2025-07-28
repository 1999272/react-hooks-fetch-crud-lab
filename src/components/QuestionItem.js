import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleSelectChange(e) {
    // parseInt so you don’t accidentally send a string
    onUpdate(id, parseInt(e.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>

      <label>
        Correct Answer:
        <select
          // controlled, not defaultValue
          value={correctIndex}
          onChange={handleSelectChange}
        >
          {answers.map((answer, idx) => (
            <option key={idx} value={idx}>
              {answer}
            </option>
          ))}
        </select>
      </label>

      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
