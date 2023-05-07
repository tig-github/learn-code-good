import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Courses from "./pages/Courses.tsx";
import About from "./pages/About.tsx";
import LessonLayout from "./pages/LessonLayout.tsx";
import LessonOne from "./pages/Course1/Lesson1/LessonOne.tsx";
import L1Setup from "./pages/Course1/Lesson1/L1Setup.tsx";
import L1Syntax from "./pages/Course1/Lesson1/L1Syntax.tsx";
import L1Variables from "./pages/Course1/Lesson1/L1Variables.tsx";
import L1Types from "./pages/Course1/Lesson1/L1Types.tsx";
import L1Operators from "./pages/Course1/Lesson1/L1Operators.tsx";
import L1Extras from "./pages/Course1/Lesson1/L1Extras.tsx";

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
            <Route path="/lesson/lesson1" element={<LessonOne />} />
            <Route path="/lesson/lesson1/helloworld" element={<L1Setup />} />
            <Route path="/lesson/lesson1/syntax" element={<L1Syntax />} />
            <Route path="/lesson/lesson1/variables" element={<L1Variables />} />
            <Route path="/lesson/lesson1/types" element={<L1Types />} />
            <Route path="/lesson/lesson1/operators" element={<L1Operators />} />
            <Route path="/lesson/lesson1/extras" element={<L1Extras />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
