import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';
import FilterBar from './FilterBar';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Details'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFetchedData(data);
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const initialData = [
    {
      title: 'How to use React?',
      description: 'Learn how to use React to build modern web applications.',
      tags: 'React',
      date: '2023-10-01',
      imageSrc:
        'https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1',
    },
    {
      title: 'How to use JavaScript?',
      description: 'Explore JavaScript and its usage in web development.',
      tags: 'JavaScript',
      date: '2023-10-02',
      imageSrc:
        'https://ictacademy.com.ng/wp-content/uploads/2020/02/92.-JavaScript-logo.png',
    },
    {
      title: 'How to use HTML?',
      description: 'Master the fundamentals of HTML for web page structure.',
      tags: 'HTML',
      date: '2023-10-03',
      imageSrc:
        'https://s3.us-east-2.amazonaws.com/upskill-school/html.svg',
    },
    {
      title: 'How to use CSS?',
      description: 'Learn CSS for styling and design of web applications.',
      tags: 'CSS',
      date: '2023-10-04',
      imageSrc:
        'https://www.leankoala.com/media/263/download/cssselector-1.png?v=1',
    },
  ];

  const [questions, setQuestions] = useState(initialData);

  useEffect(() => {
    setQuestions([...initialData, ...fetchedData]);
  }, [fetchedData]);

  const handleFilterChange = (filterValue, filterType) => {
    const searchStr = filterValue.toLowerCase();
  
    const filteredQuestions = questions.filter((question) => {
      if (filterType === 'title') {
        return question.title.toLowerCase().includes(searchStr);
      } else if (filterType === 'tags') {
        return question.tags.toLowerCase().includes(searchStr);
      } else if (filterType === 'date') {
        if (typeof question.date === 'string') {
          return question.date.includes(searchStr);
        } else {
          return false; // Handle the case where date is not a string
        }
      }
      return true; // Return true for other cases to include all questions
    });
  
    setQuestions(filteredQuestions);
  };
  
  

  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };



  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Find Questions</h1>
      <div>
        <FilterBar onFilterChange={handleFilterChange} />
      </div>
      <QuestionList
        questions={questions}
        onDelete={deleteQuestion}
      />
    </div>
  );
};

export default Home;
