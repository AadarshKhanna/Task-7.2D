import React, { useState } from 'react';
import './Home.css';
const Question = ({ title, description, tags, date, onDelete, index, imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="question-box">
      <div className="question">
        <img src={imageSrc} alt="Question Image" />
        <h3>{title}</h3>
        <div className="buttons">
          <button onClick={toggleExpansion}
            className="expand-button">
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {isExpanded && (
        <div className="question">
          <br></br>
          <p>{description}</p>
          <div className="tags">
            <strong>Tags:</strong>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <p className="date">{date}</p>
        </div>
      )}
    </div>
  );
};

export default Question;