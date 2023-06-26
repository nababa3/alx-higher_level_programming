#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    safe_print = 0
    if(my_list):
        for i in range(x):
            try:
                print("{}".format(my_list[i]), end='')
                safe_print += 1
            except IndexError:
                print()
                return(safe_print)
    print()
    return(safe_print)
