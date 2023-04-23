# These are the solutions. It is recommended to not look at them without trying, but they are available on
# the github freely - I don't personally think hiding them is productive either.
# traditionally this question not asked with file I/O, but you are more than able to incorperate it

with open('./files/fizzbuzz.txt', 'r') as f:
    for line in f:
        if line[0] == '#':
            continue 
        num = int(line)
        if num % 15 == 0:
            print('Fizzbuzz')
        elif num % 5 == 0:
            print("Buzz")
        elif num % 3 == 0:
            print("Fizz")
        else:
            print(num)
