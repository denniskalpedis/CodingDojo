word_list = ['hello','world','my','name','is','Anna']
char = 'o'
matching = [s for s in word_list if char in s]
'''
matching = []
for s in word_list:
    if char in s:
        matching.append(s)
'''
print matching