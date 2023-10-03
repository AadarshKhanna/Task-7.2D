import React from 'react';
import Question from './Question';
import './Home.css';

// Define the QuestionList component
const QuestionList = ({ questions, onDelete, onSubmit }) => {
  return (
    <div className="question-list">
      {/* Map through the list of questions and render each Question component */}
      {questions.map((question, index) => (
        <div key={index} className="question-box">
          <Question
            index={index}
            title={question.title}
            description={question.description}
            tags={question.tags}
            date={question.date}
            onDelete={onDelete}
            imageSrc={question.imageSrc}
            onSubmit={onSubmit}
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionList; // Export the QuestionList component
