# These are the solutions. It is recommended to not look at them without trying, but they are available on
# the github freely - I don't personally think hiding them is productive either.
# once complete - congrats! you now have a basic working calculator that you can use

def calculator_add(x, y, *args):
    try:
        result = x + y 
        for num in args:
            result += num
        return result
    except ValueError:
        print("ValueError - expected two numeric types")


def calculator_subtract(x, y, *args):
    try:
        result = x - y 
        for num in args:
            result -= num
        return result
    except ValueError:
        print("ValueError - expected two numeric types")
        

# Helps greatly to first write a loop, then try to convert it into recursion
# This is by far the hardest question
def calculator_multiply(x, y):
    try:
        if y == 1:
            return x 
        else:
            return x + calculator_multiply(x, y-1)
    except ValueError:
        print("ValueError - expected two numeric types")


# Also hardest, but similar to multiply
# There is actually a far more efficient way to write power recursively
def calculator_power(x, y):
    try:
        if y == 0:
            return 1
        elif y == 1:
            return x
        else:
            return x * calculator_power(x, y-1)
    except ValueError:
        print("ValueError - expected two numeric types")

# Specify parameters and create functionality for a function that
# divides 2 numbers - it must have a keyword argument set to False that returns
# the remainder instead of the quotient, and a keyword argument set to False that
# returns integer division instead of float division
# remainder will take priority over integer
# Example inputs:
# calculator_divide(3, 2) = 1.5
# calculator_divide(3, 2, remainder=True) = 1
# calculator_divide(5, 3, integer=True) = 2
# handle ValueErrors
def calculator_divide(x, y, remainder=False, integer=False):
    try:
        if remainder: # quirk of if statements, evaluates to boolean automatically
            return x % y
        if integer:
            return x // y 
        return x / y
    except ValueError:
        print("ValueError - expected two numeric types")




if __name__ == "__main__":
    print(calculator_add(1,2,3,4,5))
    print(calculator_subtract(2,4,5))
    print(calculator_multiply(2,4))
    print(calculator_power(2,5))
    print(calculator_divide(5,3,remainder=True))
