import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar.tsx";
import Navbar from "../components/Navbar.tsx";

const LessonLayout = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns="20% 80%" autoFlow="row">
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={1} overflowY="scroll">
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default LessonLayout;
