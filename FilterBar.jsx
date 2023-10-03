import React, { useState } from 'react';
import './Home.css';

// Define the FilterBar component
const FilterBar = ({ onFilterChange }) => {
  const [filterType, setFilterType] = useState(''); // Use state to track the filter type

  // Function to handle filter input change
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    onFilterChange(filterValue, filterType); // Pass both filter value and type to the parent component
  };

  // Function to handle filter type change
  const handleFilterTypeChange = (newFilterType) => {
    setFilterType(newFilterType); // Update the filter type when the button is clicked
  };

  return (
    <div className="filter-bar-wrapper"> {/* Wrapper for the filter bar */}
      <div className="filter-bar">
        <h1 style={{ textAlign: "center", fontSize: "17px" }}>Filter By</h1>
        <input
          type="text"
          placeholder={`Enter ${filterType} here`}
          onChange={handleFilterChange}
          style={{ fontSize: "14px", height: "25px" }}
        />
        <div className="filter-button-group">
          {/* Button for filtering by title */}
          <button
            className={`filter-button ${filterType === 'title' ? 'active' : ''}`}
            onClick={() => handleFilterTypeChange('title')}
          >
            Title
          </button>
          {/* Button for filtering by tag */}
          <button
            className={`filter-button ${filterType === 'tag' ? 'active' : ''}`}
            onClick={() => handleFilterTypeChange('tag')}
          >
            Tag
          </button>
          {/* Button for filtering by date */}
          <button
            className={`filter-button ${filterType === 'date' ? 'active' : ''}`}
            onClick={() => handleFilterTypeChange('date')}
          >
            Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar; // Export the FilterBar component
