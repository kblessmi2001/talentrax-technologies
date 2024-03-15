import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from '../Redux/Search/action';
import { Input, Flex, Box, Stack } from '@chakra-ui/react';
import { Skeleton, Heading } from '@chakra-ui/react'
const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.SearchReducer.searchResults);
  const isLoading = useSelector(state => state.SearchReducer.isLoading);

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
      <Flex justifyContent="center" mt="30px">
        <Box w="50%">
          <Input
            w="100%"
            h="30px"
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchSubmit();
              }
            }}
          />
        </Box>
        <Box
          w="40px"
          // border="1px solid black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor="#4190f7"
          color="white"
          onClick={handleSearchSubmit}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Box>
      </Flex>
      <Flex ml="100px" mt="50px" w="80%" mx="auto"  >
        <Box w="40%">
          <SideBar />
        </Box>
        <Box borderLeft="1px solid black" ml="20px" pl="20px" minHeight="200px">
          {isLoading ? (

            <Stack w="100%">
              <Skeleton  w="100%">
                <div>contents wrapped</div>
              </Skeleton>
              <Skeleton>
                <div>contents wrapped</div>
              </Skeleton>
              <Skeleton>
                <div>contents wrapped</div>
              </Skeleton>
            </Stack>
          ) : (
            searchResults.map(result => (
              <div key={result.id}>
                <Heading size="md" p={"10px"}>{result.name}</Heading>
              </div>
            ))
          )}
        </Box>

      </Flex>
    </div>
  );
};

export default SearchPage;
