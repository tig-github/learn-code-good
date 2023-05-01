import React from "react";
import { Stack, Image, Text, Heading } from "@chakra-ui/react";
import Goal from "../../../components/Goal.tsx";
import Skip from "../../../components/Skip.tsx";
import Python from "../../../components/Python.tsx";
import TextLine from "../../../components/TextLine.tsx";
import installPythonImg from "../../../images/python.PNG";
import installVScodeImg from "../../../images/vscode.PNG";
import terminalVersionImg from "../../../images/terminal1.PNG";
import terminalCDImg from "../../../images/terminal.PNG";
import terminalRun from "../../../images/terminal2.PNG";

const goalOneText: string =
  "Get your first taste of programming and setup an environment.";
const skipText: string =
  "You already have an environment set up to run Python.";
const fieldOneText: string = `The classic way to start learning a programming language is learning
how to print Hello World. Let's give it a try. Press the arrow button to run the code below.`;
const fieldTwoText: string = `This is a python interpreter, currently pulled from the website Trinket.
The Python interpreter is what runs our Python code. In this case, the interpreter is executing one line of code,
print("Hello World"). Congrats! You ran your first line of code.`;
const fieldThreeText: string = `print is a builtin function - a function that is provided by Python to help make our lives easier. In this
case, the print function will output whatever is passed into it, which is the sentence Hello World. We will learn what the syntax is
next, how input/output works at the end of this lesson, and what a function is (and how we can make our own!) in Lesson 3.`;
const fieldFourText: string = `For now though, let's setup Python locally. Trinket snippets will be provided in the following
lessons to help teach concepts, but it is recommended to have your own environment to work on things on your own and have more freedom.
Take it from me - when I was learning I didn't, and it made things a bit harder than they needed to be.`;
const fieldFiveText: string = `First, you will need to install Python 3. I recommend installing the latest version of Python. The link can be found
at https://www.python.org/downloads/`;
const fieldSixText: string = `The exact version of Python 3 is not critical, though later is better. Make sure not to install Python 2 - this is an older version of the language
that has some differences that may not correlate correctly.`;
const fieldSevenText: string = `Next, you will need a text editor to edit your Python code. I personally recommend vscode, however it is up to you on which
you use.`;
const fieldEightText: string = `To install vscode, go to https://code.visualstudio.com/docs/setup/setup-overview and follow the instructions based on your 
operating system (windows, linux, mac). `;
const fieldNineText: string = `From here, I recommend installing the Python extension by Microsoft and the PythonIndent extension by Kevin Rose. Alternatively,
you could get the entire Python Extension Pack by Don Jayamenne. Specific Python instructions can be found at https://code.visualstudio.com/docs/python/python-tutorial`;
const fieldTenText: string = `Now, navigate to File on the top left, and select Open Folder. Now choose any folder you want to store your projects in. When VScode prompts asking if you 
want to open the workspace, select yes. This will be your workspace where all your Python code will go. To access it again after closing and reentering vscode,
you can either Open Recent or navigate to it in Open Folder.`;
const fieldElevenText: string = `We will be running our code from the command line. Select Terminal on the top left, then select New Terminal. This will create a terminal
at the bottom of your screen. There are a few command line commands we will learn to use right now to help run code on it.`;
const fieldTwelveText: string = `Verify that Python is installed using "python3 --version"`;
const fieldThirteenText: string = `Navigate to the directory (file) you need to using cd - aka change directory. In my case, the code I
want to run is in the project-templates directory, so I am moving there. You may not need to. If you want to navigate to the parent directory (the directory your current one is inside), 
use the command "cd .."`;
const fieldFourteenText: string = `Now create a file called main.py in your directory. Add a print statement that prints Hello World, similar to the one shown above.
Now run this python file with the command "python3 main.py", you will then see the output in your terminal.`;
const fieldFifteenText: string = `If you see Hello World in your terminal, congrats! You have set up your local Python environment.`;

const textField1: Array<string> = [fieldOneText];
const textField2: Array<string> = [fieldTwoText, fieldThreeText, fieldFourText];
const textField3: Array<string> = [fieldFiveText, fieldSixText, fieldSevenText];
const textField4: Array<string> = [
  fieldEightText,
  fieldNineText,
  fieldTenText,
  fieldElevenText,
];
const textField5: Array<string> = [fieldTwelveText];
const textField6: Array<string> = [fieldThirteenText];
const textField7: Array<string> = [fieldFourteenText, fieldFifteenText];

const L1Setup = () => {
  return (
    <>
      <Stack gap={8} my="6rem" ml="2rem">
        <Heading mb="6rem" ml="25rem">
          <Text>Hello World!</Text>
        </Heading>
        <Goal text={goalOneText} />
        <Skip text={skipText} />
        <TextLine textArray={textField1} />
        <Python trinketsrc="https://trinket.io/embed/python3/164cbfc0d8" />
        <TextLine textArray={textField2} />
        <Image w="75%" src={installPythonImg} />
        <TextLine textArray={textField3} />
        <Image w="50%" src={installVScodeImg} />
        <TextLine textArray={textField4} />
        <Image w="75%" src={terminalVersionImg} />
        <TextLine textArray={textField5} />
        <Image w="75%" src={terminalCDImg} />
        <TextLine textArray={textField6} />
        <Image w="75%" src={terminalRun} />
        <TextLine textArray={textField7} />
      </Stack>
    </>
  );
};

export default L1Setup;
