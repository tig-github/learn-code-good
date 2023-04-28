// Line that is followed by text
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const TextLine = ({ textArray }) => {
  return (
    <>
      <Box
        borderWidth=".05rem"
        borderTop="None"
        borderRight="None"
        borderBottom="None"
        borderColor="black"
        h="100%"
        w="80%"
        pl={4}
      >
        {textArray.map((text) => {
          return (
            <>
              <Text fontSize="xl">{text}</Text>
              <br />
            </>
          );
        })}
      </Box>
    </>
  );
};

export default TextLine;
