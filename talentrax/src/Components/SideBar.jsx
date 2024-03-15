import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Checkbox, Text } from '@chakra-ui/react';
import { setFilters } from '../Redux/Filter/action';

const SideBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.FilterReducer.filters);

  const handleCheckboxChange = (type, value) => {
    const updatedFilters = { ...filters, [type]: value };
    dispatch(setFilters(updatedFilters));
  };

  const buildQueryString = () => {
    let queryString = '?';
    for (const key in filters) {
      if (filters[key].length > 0) {
        queryString += `${key}=${filters[key].join(',')}&`;
      }
    }
    return queryString.slice(0, -1); // Remove the trailing '&'
  };

  useEffect(() => {
    const handleCheckboxChangeForUrl = () => {
      const queryString = buildQueryString();
      window.history.pushState({}, '', `/planets${queryString}`);
    };

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handleCheckboxChangeForUrl);
    });

    return () => {
      checkboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', handleCheckboxChangeForUrl);
      });
    };
  }, [filters]);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb="4">Color</Text>
      <Flex direction="column">
        <Checkbox mb="2" onChange={(e) => handleCheckboxChange('color', e.target.checked ? ['Red'] : [])}>Red</Checkbox>
        <Checkbox mb="2" onChange={(e) => handleCheckboxChange('color', e.target.checked ? ['Green'] : [])}>Green</Checkbox>
        <Checkbox mb="4" onChange={(e) => handleCheckboxChange('color', e.target.checked ? ['Blue'] : [])}>Blue</Checkbox>
      </Flex>

      <Text fontSize="xl" fontWeight="bold" mb="4">Shape</Text>
      <Flex direction="column">
        <Checkbox mb="2" onChange={(e) => handleCheckboxChange('shape', e.target.checked ? ['Small'] : [])}>Small</Checkbox>
        <Checkbox mb="2" onChange={(e) => handleCheckboxChange('shape', e.target.checked ? ['Medium'] : [])}>Medium</Checkbox>
        <Checkbox mb="4" onChange={(e) => handleCheckboxChange('shape', e.target.checked ? ['Large'] : [])}>Large</Checkbox>
      </Flex>

      <Text fontSize="xl" fontWeight="bold" mb="4">Size</Text>
      <Flex direction="column">
        <Checkbox mb="2" onChange={(e) => handleCheckboxChange('size', e.target.checked ? ['Round'] : [])}>Round</Checkbox>
        <Checkbox mb="4" onChange={(e) => handleCheckboxChange('size', e.target.checked ? ['Oval'] : [])}>Oval</Checkbox>
      </Flex>
    </Box>
  );
};

export default SideBar;
