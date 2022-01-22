# Always Hungry | Write a function that is given an array and each time the value is "food" 
# it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

def alwaysHungry(my_list):
    for i in my_list:
        if (i == "food"):
            print("yummy")
        if (i != "food"):
            x = my_list.index(i)
            if (x > len(my_list) -2 ):
                print("I'm hungry")

alwaysHungry([3, True, "food", False, "food"])
alwaysHungry([3, 2, 7, 10, 1, 55])

# High Pass Filter | Given an array and a value cutoff, return a new array containing only the values larger than cutoff.


#Better than average | Given an array of numbers return a count of how many of the numbers are larger than the average.


#Array Reverse | Write a function that will reverse the values an array and return them.


# Fibonacci Array | Fibonacci numbers have been studied for years and appear often in nature. 
# Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers 
# are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 
# 5th value is 3 then the next value in the sequence is 5.