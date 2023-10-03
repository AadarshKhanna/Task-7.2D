import React, { useState } from 'react';
import QuestionList from './QuestionList';
import FilterBar from './FilterBar';
import './Home.css';

// Define the Home component
const Home = () => {
  // Define state variables for questions and filters
  const [questions, setQuestions] = useState([
    // Sample question data
    {
      title: 'How to use React?',
      description: 'Learn how to use React to build modern web applications.',
      tags: ['React', 'JavaScript'],
      date: '2023-10-01',
      imageSrc: 'https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1',
    },
    {
      title: 'How to use JavaScript?',
      description: 'Explore JavaScript and its usage in web development.',
      tags: ['JavaScript', 'Web Development'],
      date: '2023-10-02',
      imageSrc: 'https://ictacademy.com.ng/wp-content/uploads/2020/02/92.-JavaScript-logo.png',
    },
    {
      title: 'How to use HTML?',
      description: 'Master the fundamentals of HTML for web page structure.',
      tags: ['HTML', 'Web Development'],
      date: '2023-10-03',
      imageSrc: 'https://s3.us-east-2.amazonaws.com/upskill-school/html.svg',
    },
    {
      title: 'How to use CSS?',
      description: 'Learn CSS for styling and design of web applications.',
      tags: ['CSS', 'Web Design'],
      date: '2023-10-04',
      imageSrc: 'https://www.leankoala.com/media/263/download/cssselector-1.png?v=1',
    },
  ]);

  // Define state variables for filters
  const [titleFilter, setTitleFilter] = useState('');
  const [tagsFilter, setTagsFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Function to handle filter changes
  const handleFilterChange = (filterValue, filterType) => {
    const searchStr = filterValue.toLowerCase();
    if (filterType === 'title') {
      setTitleFilter(searchStr);
    } else if (filterType === 'tags') {
      setTagsFilter(searchStr);
    } else if (filterType === 'date') {
      setDateFilter(searchStr);
    }
  };

  // Function to delete a question by index
  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Find Questions</h1>
      <div>
        <FilterBar onFilterChange={handleFilterChange} />
      </div>
      <QuestionList
        questions={questions.filter((question) =>
          question.title.toLowerCase().includes(titleFilter) &&
          question.tags.some((tag) => tag.toLowerCase().includes(tagsFilter)) &&
          question.date.includes(dateFilter)
        )}
        onDelete={deleteQuestion}
      />
    </div>
  );
};

export default Home; // Export the Home component
