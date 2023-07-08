import {
  Box,
  Button,
  Center,
  Circle,
  Grid,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const JetBrainsMono = localFont({
  src: "../public/JetBrainsMono-ExtraBold.ttf",
});

export default function Custom404() {
  return (
    <>
      <Box bgColor="#EDEDED" h="45rem" overflow="hidden">
        <Grid gridTemplateRows="repeat(2, 1fr)" gap="5rem">
          <Grid gridTemplateColumns="repeat(2, 1fr)">
            <Box mt="10rem" ml="8.8rem">
              <Text
                className={JetBrainsMono.className}
                color="#59009E"
                fontWeight="800"
                fontSize="3rem"
              >
                Whoops!
              </Text>
              <Text
                className={inter.className}
                color="#000000"
                fontWeight="800"
                fontSize="3rem"
                letterSpacing="0.09em"
              >
                Something&apos;s
                <br />
                gone missing...
              </Text>
              <svg
                width="437"
                height="29"
                viewBox="0 0 437 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 23.994C63.3333 9.66069 235.9 -10.406 435.5 23.994"
                  stroke="#FFC700"
                  strokeWidth="10"
                />
              </svg>
            </Box>
            <Box>
              <Box
                bgColor="#FFC2C2"
                w="51rem"
                h="51rem"
                borderRadius="0 0 0 51rem"
                ml="10rem"
                bottom="15rem"
                pos="absolute"
              ></Box>
              <Text
                transform="rotate(-45deg)"
                fontSize="18rem"
                pos="absolute"
                className={JetBrainsMono.className}
                color="000000"
                textShadow="20px 20px 0px #4E75FF"
              >
                404
              </Text>
            </Box>
          </Grid>
          <Box>
            <Text
              className={inter.className}
              align="center"
              fontSize="1.5rem"
              fontWeight="500"
            >
              On your path to enlightenment, you found a new direction.
            </Text>
            <Text className={inter.className} fontSize="1rem" align="center">
              While we hope to help you find what you desire,
              <br />
              We suggest a return to home.
            </Text>
            <Center pt="1.5rem">
              <Link href="/">
                <Button
                  bgColor="#000000"
                  borderRadius="1.5rem"
                  boxShadow="10px -5px 0px #72FF70"
                  _hover={{}}
                  _active={{ boxShadow: "0 0 0 #72FF70" }}
                >
                  <Text
                    className={inter.className}
                    fontSize="1rem"
                    color="#FFFFFF"
                  >
                    Bring me back
                  </Text>
                </Button>
              </Link>
            </Center>
          </Box>
        </Grid>
      </Box>
    </>
  );
}