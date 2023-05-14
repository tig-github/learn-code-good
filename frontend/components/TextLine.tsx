// Line that is followed by text
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const TextLine = ({ textArray }: { textArray: any }) => {
  return (
    <>
      <Box
        borderWidth=".05rem"
        borderTop="None"
        borderRight="None"
        borderBottom="None"
        borderColor="black"
        h="100%"
        w="90%"
        pl={4}
      >
        {textArray.map((text: string) => {
          return (
            <div key={text}>
              <Text fontSize="xl">{text}</Text>
              <br />
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default TextLine;
