# Given a number of stairs, return how many distinct ways someone can climb them taking either 1 or 2 steps at a time.

def get_unique_climbs(steps):
    a, b = 1, 1
    for i in range(steps):
        a, b = b, a + b
        print(a)
    return a
    
get_unique_climbs(4)
