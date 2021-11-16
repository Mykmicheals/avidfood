import os
import datetime

from time import sleep


for i in range(1, 30):
    if i==3 or i == 9 or i ==16 or i==25:
        continue
    os.system(f'git commit --amend --date="Nov {i} 1:00 2021 +0100" --no-edit')
    os.system('git push -f origin main')
   # print(i)
    sleep(4)

# for i in range(1,10):
#     print(i)
#     sleep(10)