import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from '../Redux/Search/action';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.SearchReducer.searchResults); 

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchTextFromParams = searchParams.get('q');
    if (searchTextFromParams) {
      setSearchText(searchTextFromParams);
    }
  }, []);

  const handleSearchChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);

    const url = new URL(window.location.href);
    url.searchParams.set('q', newSearchText);
    window.history.pushState({}, '', url);
  };

  const handleSearchSubmit = () => {
        dispatch(searchItems(searchText)); 
  };

  return (
    <div>
      <div style={{ display: "flex", flexwrap:"wrap" ,justifyContent: "center",marginTop:"30px" }}>
        <div>
          <input
            style={{ width: "300px", height: "30px" }}
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchSubmit(); 
              }
            }}
          />
        </div>
        <div
          style={{
            width: "40px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4190f7",
            color: "white"
          }}
          onClick={handleSearchSubmit}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div style={{display:"flex",marginLeft:"100px",marginTop:"50px",width:"27%",margin:"auto"}}>
        <div style={{width:"35%"}}>
          <SideBar />
        </div>
        <div style={{ borderLeft: "1px solid black", marginLeft: "20px", paddingLeft: "20px",marginTop:"20px" }}>
          </div>        <div>
          {searchResults.map(result => (
            <div key={result.id}>
              <h3>{result.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
