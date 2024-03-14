// SearchPage.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from '../Redux/Search/action';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const searchResults = useSelector(state => state.search.searchResults);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchItems(searchText));
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <input
            style={{ width: "500px", height: "30px" }}
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div style={{ width: "40px", border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#4190f7", color: "white" }}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div>
        {searchResults.map(result => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default SearchPage;
