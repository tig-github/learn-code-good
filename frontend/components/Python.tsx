/*
Python Interpreter: IFrame From Trincket Website
Replace At One Point?
*/

import React from "react";
import { Container } from "@chakra-ui/react";

const Python = ({ trinketsrc }: { trinketsrc: string }) => {
  return (
    <>
      <Container maxW = "75%">
        <iframe
          src = {trinketsrc}
          width = "100%"
          height = "356"
        ></iframe>
      </Container>
    </>
  );
};

export default Python;
