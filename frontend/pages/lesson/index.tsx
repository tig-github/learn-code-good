import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const LessonLayout = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns="20% 80%" autoFlow="row">
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
      </Grid>
    </>
  );
};

export default LessonLayout;
