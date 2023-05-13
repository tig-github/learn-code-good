import React, { useRef } from "react";
import Link from "next/link";
import { useHover } from "usehooks-ts";
import LessonIcon from "./LessonIcon";
import {
  Image,
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
  MenuGroup,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const router = useRouter();
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
          <Link href="/">
            <Image
              src={"/images/main_logo.png"}
              w="40px"
              h="40px"
              mr="2rem"
              mt="0.2rem"
            />
          </Link>
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
                    <Text color="grey" fontWeight="bold">
                      Profile
                    </Text>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <Text color="#F3785D" fontWeight="bold">
                    Logout
                  </Text>
                </MenuItem>
                {/* <MenuItem>Login</MenuItem> */}
              </MenuList>
            </MenuGroup>
          </Menu>
          {router.pathname.includes("lesson") && <LessonIcon />}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
