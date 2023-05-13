import React from "react";
import {
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Popover,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Goal = ({ text }: { text: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          backgroundColor="green"
          mr="1rem"
          aria-label="Goal"
          variant="unstyled"
          size="lg"
          borderRadius="50%"
          icon={<CheckIcon color="white" boxSize={8} />}
        />
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Goal:</PopoverHeader>
        <PopoverBody>{text}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Goal;
