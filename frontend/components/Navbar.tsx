import React from "react";
import Link from "next/link";
import { Box, Flex, Button, ButtonGroup, Spacer, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderTop="None"
        borderRight="None"
        borderColor="grey"
        w="100%"
        p={4}
        position="sticky"
        top={0}
        zIndex={1}
      >
        <Flex align="left" mx="1rem">
          <ButtonGroup gap={3}>
            <Link href="/">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                Courses
              </Button>
            </Link>
            <Link href="/about">
              <Button colorScheme="blackAlpha" variant="outline" size="lg">
                About
              </Button>
            </Link>
          </ButtonGroup>
          <Spacer />
          <Text fontSize="2rem" color="grey">
            Learn-Code-Good
          </Text>
          <Link
            href="/profile"
            style={{ width: "3.5%", height: "2%", marginLeft: "1.5rem" }}
          >
            <CgProfile size="100%" color="grey" />
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
