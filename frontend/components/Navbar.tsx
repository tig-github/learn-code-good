import React, { useRef } from "react";
import Link from "next/link";
import { useHover } from "usehooks-ts";
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  Spacer,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Flex align="left" mx="1rem" h="100%" minH="3.5rem" mt=".5rem">
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
          <Menu isOpen={isHover}>
            <MenuGroup ref={hoverRef}>
              <Link
                href="/profile"
                style={{
                  width: "50%",
                  height: "100%",
                  marginLeft: "1.5rem",
                }}
              >
                <MenuButton as={Button} variant="unstyled" mt=".3rem">
                  <CgProfile size="100%" color="grey" />
                </MenuButton>
              </Link>
              <MenuList>
                <Link href="/profile">
                  <MenuItem>
                    <Button variant="unstyled">Profile</Button>
                  </MenuItem>
                </Link>

                <MenuItem>
                  <Button variant="unstyled" color="#F3785D">
                    Logout
                  </Button>
                </MenuItem>
                {/* <MenuItem>Login</MenuItem> */}
              </MenuList>
            </MenuGroup>
          </Menu>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
