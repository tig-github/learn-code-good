# These are the solutions. It is recommended to not look at them without trying, but they are available on
# the github freely - I don't personally think hiding them is productive either.


# Question 0 (Setup): 
print("Hello Student", end="!") # as discussed, newline is a special char of form '\n', and print has an end= keyword argument
# more on keyword arguments will be discussed later, the main goal was to ensure the environment runs

# Question 1:
num1 = int(input("\nPlease enter a number: "))
num2 = int(input("Please enter a number: "))
print(num1 + num2) # even a program like this can be written in many different ways


# Question 2:
x = 1
y = 2
# swap
z = x
x = y 
y = z
# python also has a shortform way of writing it
x,y = y,x


# Question 3:
try:
    x = 1 + '1'    
except (TypeError):
    print("Good job, correct")
# try except are a method of handling exceptions, which are how the program responds to errors
# exceptions are better explained in control flow in lesson 2, just know for now they can handle errors


# Question 4:
try:
    var1 = 1
    var2 = 2
    print(var1 - var2)
except (SyntaxError, TypeError):
    print("Incorrect, code not fixed")
# 2 mistakes, == instead of = and strings instead of ints - small syntax errors like these are always common


# Question 5:
user_input1 = input("Please enter a string: ")
user_input2 = input("Please enter a string: ")
print("Today", end=" ")
print(user_input1)
print("went to the store today to purchase some ")
print(user_input2)
# for those curious, here is how I would write this
print(f"Today {input('Please enter a string: ')} went to the store to purchase {input('Please enter a string: ')}") # fstrings will be discussed more later



# Question 6:
num = int(input("Please enter a number: ")) # float acceptable too
print(num % 2)

# Question 7
# Create a program that outputs the first and last character of the given string

string_to_check = "Hello World :D"
print(string_to_check[0], string_to_check[-1])