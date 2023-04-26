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

const Sidebar = () => {
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderTop="None"
        borderColor="grey"
        w="25%"
        h="100%"
        p={4}
        position="fixed"
      >
        <Flex align="left" mx="1rem" direction="column"></Flex>
      </Box>
    </>
  );
};

export default Sidebar;
