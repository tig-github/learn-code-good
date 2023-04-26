import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import {
  Stack,
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

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
