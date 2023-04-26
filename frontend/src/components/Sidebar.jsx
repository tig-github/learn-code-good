import React from "react";
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  Link,
  Spacer,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderTop="None"
        borderColor="grey"
        h="100%"
        minH="calc(100vh)"
        p={4}
        overflowY="scroll"
        zIndex={0}
        position="fixed"
      >
        <Flex align="left" mx="1rem" direction="column">
          <Button colorScheme="blackAlpha" variant="ghost" my="1.5rem">
            <Heading size="md">
              <Text align="center">Lesson 1</Text>
            </Heading>
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost">
            Hello World! Setup
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost">
            Syntax
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost">
            Variables
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost">
            Types
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost">
            Operators
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost">
            Errors
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost">
            Input/Output
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
