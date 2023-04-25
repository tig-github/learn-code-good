import React from "react";
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderTop="None"
        borderColor="grey"
        w="100%"
        p={4}
      >
        <Flex align="left" mx="1rem">
          <ButtonGroup gap={3}>
            <Link as={RouterLink} to="/">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/courses">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                Courses
              </Button>
            </Link>
            <Link as={RouterLink} to="/about">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                About
              </Button>
            </Link>
          </ButtonGroup>
          <Spacer />
          <Text fontSize="2rem" color="grey">
            Learn-Code-Good
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
