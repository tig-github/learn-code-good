import React from "react";
import { Grid } from "@chakra-ui/react";
import Python from "../components/Python";
import Background from "@/components/Landing/Background";

const welcomeText: string = `Welcome to this website.
My goal with this website is to help teach people how to code in as simple of an environment as possible. 
It is well known that an overload of options tends to lead to people choosing nothing, and this is especially
true when it comes to learning how to code. While yet another webstie teaching code is not necessarily
the solution, my idea is to have a simple platform that provides necessary fundementals and skills
to achieve self sufficiency in programming. Every programmer one day has to make the 'leap' from
tutorial hell to real independence, and that is the goal here.`;
const welcomeText2: string = ` There will be detailed steps in installing a preferable local environment, however
for simplicity I will be using an embedded Python interpreter for some things. The
interpreter I will be using now is the lovely Trinket one, however eventually
I would like to embed it directly.`;

const Home = () => {
  return (
    <Grid>
      <Background />
    </Grid>
  );
};

export default Home;
