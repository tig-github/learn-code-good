import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar.tsx";
import Navbar from "../components/Navbar.tsx";

const LessonLayout = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={3}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default LessonLayout;
