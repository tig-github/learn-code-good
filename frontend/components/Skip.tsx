import React from "react";
import {
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Popover,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

const Skip = ({ text }: { text: string }) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton
            backgroundColor="red"
            mr="1rem"
            aria-label="Skip"
            variant="unstyled"
            size="lg"
            borderRadius="50%"
            icon={<WarningTwoIcon color="white" boxSize={8} />}
          />
        </PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Only skip if:</PopoverHeader>
          <PopoverBody>{text}</PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Skip;
