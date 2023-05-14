import React from "react";
import { Stack, OrderedList, ListItem, Heading, Text } from "@chakra-ui/react";

const Exercises = ({ exerciseArray }: { exerciseArray: Array<string> }) => {
  return (
    <>
      <Stack align="left" gap={6}>
        <Heading mt="3rem">
          <Text fontSize="2xl">Exercises</Text>
        </Heading>
        <OrderedList fontSize="xl">
          {exerciseArray.map((exercise) => {
            return (
              <ListItem ml="2rem" mt=".5rem">
                {exercise}
              </ListItem>
            );
          })}
        </OrderedList>
      </Stack>
    </>
  );
};

export default Exercises;
