import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        className="input mb-3"
        type="text"
        placeholder="Search for a food"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;