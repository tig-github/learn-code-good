# These are the solutions. It is recommended to not look at them without trying, but they are available on
# the github freely - I don't personally think hiding them is productive either.

terms = {}
with open('./files/terms.txt', 'r') as f:
    for line in f:
        words = line.split(' ')
        for word in words:
            if word in terms:
                terms[word] += 1
            else:
                terms[word] = 1
with open('./files/results.txt', 'w') as f:
    for term in terms:
        f.write(term)
        f.write(" | ")
        f.write(str(terms[term]))
        f.write("\n")