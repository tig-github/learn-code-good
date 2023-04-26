import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import LessonLayout from "./pages/LessonLayout";
import LessonOne from "./pages/Course1/Lesson1/LessonOne";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />

            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/lesson" element={<LessonLayout />}>
            <Route path="/lesson/lesson1" element={<LessonOne />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
