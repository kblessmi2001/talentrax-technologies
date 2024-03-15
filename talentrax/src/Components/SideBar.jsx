import React from 'react';
import { Box, Flex, Checkbox, Text } from '@chakra-ui/react';

const SideBar = () => {
    return (
        <Box>
            <Text fontSize="xl" fontWeight="bold" mb="4">Color</Text>
            <Flex direction="column">
                <Checkbox mb="2">Red</Checkbox>
                <Checkbox mb="2">Green</Checkbox>
                <Checkbox mb="4">Blue</Checkbox>
            </Flex>

            <Text fontSize="xl" fontWeight="bold" mb="4">Shape</Text>
            <Flex direction="column">
                <Checkbox mb="2">Small</Checkbox>
                <Checkbox mb="2">Medium</Checkbox>
                <Checkbox mb="4">Large</Checkbox>
            </Flex>

            <Text fontSize="xl" fontWeight="bold" mb="4">Size</Text>
            <Flex direction="column">
                <Checkbox mb="2">Round</Checkbox>
                <Checkbox mb="4">Oval</Checkbox>
            </Flex>
        </Box>
    )
}

export default SideBar;
