import React from "react";
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  Spacer,
  Text,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

export const Routes = () => [
  { route: '/lesson/lesson1',           name: 'Lesson 1',                 header: true },
  { route: '/lesson/lesson1/setup',     name: 'Hello World! Setup',       header: false },
  { route: '/lesson/lesson1/syntax',    name: 'Syntax',                   header: false },
  { route: '/lesson/lesson1/variables', name: 'Variables',                header: false },
  { route: '/lesson/lesson1/types',     name: 'Types',                    header: false },
  { route: '/lesson/lesson1/operators', name: 'Operators',                header: false },
  { route: '/lesson/lesson1/setup',     name: 'Errors',                   header: false },
  { route: '/lesson/lesson1/setup',     name: 'Input/Output',             header: false },
  { route: '/lesson/lesson1/extras',    name: 'Extras',                   header: false },
  { route: '/lesson/lesson1/setup',     name: 'Lesson 2',                 header: true },
  { route: '/lesson/lesson1/setup',     name: 'Control Flow',             header: false },
  { route: '/lesson/lesson1/setup',     name: 'Branching',                header: false },
  { route: '/lesson/lesson1/setup',     name: 'While Loops',              header: false },
  { route: '/lesson/lesson1/setup',     name: 'For Loops',                header: false },
  { route: '/lesson/lesson1/setup',     name: 'Files and Error Handling', header: false },
];

const Sidebar = () => {
  return (
    <>
      <Box
        bg="white"
        borderWidth=".05rem"
        borderTop="None"
        borderColor="grey"
        h="100%"
        p={4}
        overflowY="scroll"
        zIndex={0}
        position="fixed"
      >
        <Flex align="center" mx="1rem" direction="column">
          { Routes().map(({route, name, header}) => {
            if (header) {
              return (
                <Link key={route} href={`${route}`}>
                  <Button colorScheme="blackAlpha" variant="ghost" my="1.5rem">
                    <Heading size="md">
                      <Text align="center">
                        { name }
                      </Text>
                    </Heading>
                  </Button>
                </Link>
              );
            }
            else {
              return (
                <Link key={route} href={`${route}`}>
                  <Button colorScheme="blackAlpha" variant="ghost">
                    { name }
                  </Button>
                </Link>
              );
            }
          })}
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
