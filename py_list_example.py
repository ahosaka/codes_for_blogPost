# JavaScript Array Example


# access to each
name_list = ['John', 'Mark', 'Jane']

print(name_list[1])
print(len(name_list))
# output
# Mark
# 3

# update array
name_list[1] = 'Tim'
print(name_list)
# output
# [ 'John', 'Tim', 'Jane' ]


# Append new ver at the end
name_list.append('Emma')
print(name_list)
# output
# [ 'John', 'Tim', 'Jane', 'Emma' ]

# Append new var at the top
name_list.insert(0, 'Kate')
print(name_list)
# output
# [ 'Kate', 'John', 'Tim', 'Jane', 'Emma' ]

# added new var at wherever you want
name_list.insert(2, 'Sam')
print(name_list)
# output
#['Kate', 'John', 'Sam', 'Tim', 'Jane', 'Emma']

# Remove var at the end
print(name_list)
print(name_list.pop())
# output
# [ 'Kate', 'John', 'Tim', 'Jane' ]

# access to var you want
print(name_list[1])

# get length of the list
print(len(name_list))

# sort the list
name_list.sort()
print(name_list)

# slice
slice_1 = name_list[1:3]
slice_2 = name_list[2:]
print(slice_1)
print(slice_2)
