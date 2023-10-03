import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import { db } from "./Firebase";
import { addDoc, collection } from 'firebase/firestore';

// Define inline styles for elements
const inputStyle = {
  width: '32.3%',
  fontSize: '20px',
};

const containerStyle = {
  textAlign: 'left',
  fontSize: '20px',
  width: '34%',
};

const containStyle = {
  textAlign: 'center',
  marginBottom: "20px",
};

const radioStyle = {
  width: '20px',
  height: '20px',
};

function U_val() {
  // Define state variables to store user input
  const [selectedValue, setSelectedValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTag] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articletext, setArticleText] = useState('');
  const [imageURL, setImageURL] = useState('');
  const userCollectionRef = collection(db, "Details")

  const handleImageUpload = (url) => {
    setImageURL(url);
  }
  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      title: title,
      imageUrl: imageURL,
      description: description,
      abstract: abstract,
      articletext: articletext,
      tags: tags
    })
      .then(() => {
        // Document added successfully, now reload the page
        window.location.reload();
      })
  }

  return (
    <div>
      <form>
        <div className='alignleft'>
          <p className='inline-block' style={{ marginTop: "30px", marginBottom: "10px" }}>New Post</p>
          <label>Select Post Type:</label>
          <input
            type="radio"
            id="postQuestion"
            name="post_type"
            value="Question"
            onChange={handleRadioChange}
            style={radioStyle}
          />
          <label htmlFor="postQuestion">Question</label>
          <input
            type="radio"
            id="postArticle"
            name="post_type"
            value="Article"
            onChange={handleRadioChange}
            style={radioStyle}
          />
          <label htmlFor="postArticle">Article</label>
        </div>
      </form>
      <p className='inline-block' style={{ marginTop: "10px", marginBottom: "20px" }}>What do you want to ask or share</p>
      {selectedValue === 'Question' && (
        <div>
          <div style={containStyle}>
            <label htmlFor="title" style={{ fontSize: '24px', fontWeight: "bold" }}>Title</label>
            <input
              id="question"
              placeholder='Start your question with how, what, why, etc.'
              onChange={(e) => setTitle(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div className='aligncenter'>
            <p className='marginright' style={{ marginBottom: '1px' }}>Describe your problem</p>
            <textarea
              id="msg"
              name="user_message"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='alnleft' style={{ marginTop: '20px' }}>
            <label htmlFor="tags">Tags</label>
            <input
              id="tag"
              placeholder='Please add up to 3 tags to describe what your question is about e.g., Java'
              style={inputStyle}
              onChange={(e) => setTag(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit" className='b_type' onClick={handleSubmit}>Post</button>
          </div>
        </div>
      )}

      {selectedValue === 'Article' && (
        <div>
          <div style={containStyle}>
            <label htmlFor="articleTitle" style={{ fontSize: '24px', fontWeight: "bold" }}>Title</label>
            <input
              id="articleTitle"
              placeholder="Enter a descriptive title."
              style={inputStyle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <ImageUpload onImageUpload={handleImageUpload} />
          </div>
          <div className='alnleft' style={{ marginTop: '20px' }}>
            <p className='marginleft' style={{ marginBottom: '1px' }}>Abstract</p>
            <textarea
              id="msg"
              name="user_message"
              style={containerStyle}
              className='abstract_area'
              placeholder='Enter a 1-paragraph abstract'
              onChange={(e) => setAbstract(e.target.value)}
            ></textarea>
          </div>
          <div className='alnleft' style={{ marginTop: '20px' }}>
            <p className='marginlt' style={{ marginBottom: '1px' }}>Article Text</p>
            <textarea
              id="msg"
              name="user_message"
              style={containerStyle}
              className='article_area'
              placeholder='Enter a 1-paragraph abstract'
              onChange={(e) => setArticleText(e.target.value)}
            ></textarea>
          </div>
          <div className='alnleft' style={{ marginTop: '20px' }}>
            <label htmlFor="tags">Tags</label>
            <input
              id="tag"
              placeholder='Please add up to 3 tags to describe what your article is about e.g., Java'
              style={inputStyle}
              onChange={(e) => setTag(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit" className='b_type' onClick={handleSubmit}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default U_val;
