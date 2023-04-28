/*
Currently the Python interperter is an iframe from the Trincket website
For iframe security reasons and a want to learn I will be replacing this with my own at some point
*/

import React from "react";
import { Container } from "@chakra-ui/react";

const Python = ({ trinketsrc }) => {
  return (
    <>
      <Container maxW="75%">
        <iframe
          src={trinketsrc}
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
        ></iframe>
      </Container>
    </>
  );
};

export default Python;
