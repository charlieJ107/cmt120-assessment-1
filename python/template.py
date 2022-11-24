import copy

# Exercise 1 - Iris Species Classifier


def exercise1(SepalLen, SepalWid, PetalLen, PetalWid):
    setosa = "setosa"
    versicol = "versicolor"
    virginic = "virginica"
    if PetalLen < 2.5:
        return setosa
    elif PetalWid < 1.8:
        if PetalLen < 5:
            if PetalWid < 1.7:
                return versicol
            else:
                return virginic
        else:
            if PetalWid >= 1.6:
                if SepalLen < 7:
                    return versicol
                else:
                    return virginic
            else:
                return virginic
    else:
        if PetalLen < 4.9:
            if SepalLen < 6:
                return versicol
            else:
                return virginic
        else:
            return virginic

# Exercise 2 - Dog Breeds Standards


def exercise2(breed, height, weight, male):
    if male:
        gender = "male"
    else:
        gender = "female"
    breedDict = {
        "Bulldog": {
            "male": {
                "height": 15,
                "weight": 50
            },
            "female": {
                "height": 14,
                "weight": 40
            }
        },
        "Dalmatian": {
            "male": {
                "height": 24,
                "weight": 70
            },
            "female": {
                "height": 19,
                "weight": 45
            }
        },
        "Maltese": {
            "male": {
                "height": 9,
                "weight": 7
            },
            "female": {
                "height": 7,
                "weight": 6
            }
        }
    }
    minHeight = breedDict[breed][gender]["height"] * 0.9
    maxHeight = breedDict[breed][gender]["height"] * 1.1
    minWeight = breedDict[breed][gender]["weight"] * 0.9
    maxWeight = breedDict[breed][gender]["weight"] * 1.1

    return minHeight <= height and height <= maxHeight and minWeight <= weight and weight <= maxWeight


# Exercise 3 - Basic Statistics


def exercise3(origin: list):
    squared = []
    origin.sort()
    sum_origin = 0
    sum_sqared = 0
    for i in origin:
        sum_origin += i
        sq = i * i
        squared.append(sq)
        sum_sqared += sq
    squared.sort()
    if len(origin) % 2 == 0:
        mid_origin = (origin[int((len(origin) / 2) - 1)] +
                      origin[int(len(origin)/2)]) / 2
        mid_squared = (squared[int((len(squared) / 2) - 1)] +
                       squared[int(len(squared) / 2)]) / 2
    else:
        mid_origin = origin[int(len(origin) / 2)]
        mid_squared = squared[int(len(squared) / 2)]

    origin_ave = sum_origin / len(origin)
    if origin_ave % 1 == 0:
        origin_ave = int(origin_ave)
    squared_ave = sum_sqared / len(squared)
    if squared_ave % 1 == 0:
        squared_ave = int(squared_ave)

    return [
        (
            origin[0],
            origin_ave,
            mid_origin,
            origin[-1]
        ),
        (
            squared[0],
            squared_ave,
            mid_squared,
            squared[-1]
        )
    ]


# Exercise 4 - Finite-State Machine Simulator


def exercise4(trans: dict, init_state: str, input_list: list):
    state_machine = {}
    for key in trans.keys():
        (state, input) = key.split('/')
        (output_state, output) = trans[key].split('/')
        if state not in state_machine.keys():
            state_machine[state] = dict()
        state_machine[state][input] = (output_state, output)
    res = []
    for inp in input_list:
        res.append(state_machine[init_state][inp][1])
        init_state = state_machine[init_state][inp][0]
    return res


# Exercise 5 - Document Stats

def exercise5(filename):
    num_alpha = 0
    num_digit = 0
    num_symbol = 0
    num_word = 0
    num_sentence = 0
    num_paragraph = 0
    last_char = None
    last_line_is_empty_line = False
    word_start = False
    paragraph_start = False
    with open(filename, 'r') as f:
        for i in f.read():
            paragraph_start = True
            if i.isalpha():
                num_alpha += 1
                word_start = True
            elif i == '\n':
                if last_char == '\n':
                    if not last_line_is_empty_line:
                        num_paragraph += 1
                    paragraph_start = False
                    last_line_is_empty_line = True
                else:
                    last_line_is_empty_line = False
                # word count
                if word_start:
                    num_word += 1
                word_start = False

            elif i.isspace():
                if word_start:
                    num_word += 1
                    word_start = False
            elif i.isdigit():
                num_digit += 1
                word_start = True
            elif i == '.' or i == "?" or i == '!':
                num_symbol += 1
                num_sentence += 1
                if word_start:
                    num_word += 1
                    word_start = False
            elif i == ',':
                num_symbol += 1
                if word_start:
                    num_word += 1
                    word_start = False
            else:
                num_symbol += 1
                if word_start:
                    num_word += 1
                    word_start = False
            last_char = i

    # Handle final paragraph without another empty line
    if paragraph_start:
        num_paragraph += 1

    return (num_alpha, num_digit, num_symbol, num_word, num_sentence, num_paragraph)

# Exercise 6 - List Depth


def exercise6_rec(l):
    # Recursive
    table = 1
    record = False
    for i in l:
        if type(i) == list:
            record = True
            ab = exercise6(i)
            if ab > table:
                table = ab

    if record == False:
        return 1
    else:
        return table + 1

def exercise6(l):
    current_depth = 0
    max_depth = 0
    for i in str(l):
        if i == '[':
            # list start
            current_depth+=1
        elif i == ']':
            # list end
            if current_depth > max_depth:
                max_depth = current_depth
            current_depth -= 1
    return max_depth - 1
        
        

# Exercise 7 - Change, please


def exercise7(amount, coins):
    # TODO Debug
    possible_coins = (200, 100, 50, 20, 10, 5, 2, 1)
    amount = int(amount * 100)
    # The worse idea, use 1p coin only
    coins_needed = [amount+1 for _ in range(amount + 1)]
    for still_need_amount in range(len(coins_needed)):
        for this_kind_of_coin in possible_coins:
            if amount - this_kind_of_coin > 0:
                # if amount - current_coin < 0, this coin is too much for this amount
                
                # we still need one more coin to have this amount
                coins_needed[still_need_amount] = min(
                    coins_needed[still_need_amount - this_kind_of_coin] + 1, # at this amount of changes, use this kind of coin will be better (less use of coins)
                    coins_needed[still_need_amount] # or other kind of coins is good enough
                    )
    return coins_needed[amount] > coins
                

                


# Exercise 8 - Five Letter Unscramble


def exercise8(s):
    origin = s # backup s since we will pop founded characters in s
    count = 0
    with open("test_data/wordle.txt", 'r', encoding="utf-8") as f:
        for i in f.readlines(): 
            i = i.replace("\n", "")
            all_c_in_i_is_in_s = False
            for c in i: # O(n) since len(i) is always 5
                if c in s:
                    all_c_in_i_is_in_s = True
                    s = s.replace(c, "", 1) # pop founded characters in s
                else: 
                    all_c_in_i_is_in_s = False
                    break
            if all_c_in_i_is_in_s:
                count += 1
            s = origin # restore s from backup
    return count
# Exercise 9 - Wordle Set


def exercise9(green, yellow, gray):
    res = []
    with open("test_data/wordle.txt", 'r', encoding="utf-8") as f:
        for word in f.readlines():
            word = word.replace("\n", "")
            not_this_word = False
            for char_index in range(len(word)):
                for y in yellow.keys():
                    if y not in word:
                        not_this_word = True
                        break
                if word[char_index] in gray:
                    not_this_word = True
                    break
                elif word[char_index] in yellow.keys() and char_index==yellow[word[char_index]]:
                    not_this_word = True
                    break
                elif char_index in green.keys() and word[char_index] != green[char_index]:
                    not_this_word = True
                    break
            if not_this_word:
                continue
            else:
                # res += 1
                res.append(word)
    return len(res)

# Exercise 10 - One Step of Wordle


def exercise10(green, yellow, gray):
    return None


### debug start ###
green_1 = {1:'i',3:'c'}
yellow_1 = {'e':{3}}
gray_1 = {'r','a','s','d','f'}
green_2 = {2:'a'}
yellow_2 = {'a':{3},'i':{2},'l':{3,4},'r':{1}}
gray_2={'e','t','u','o','p','g','h','c','m','s'}
green_3 = {}
yellow_3 = {'r':{1},'i':{2},'l':{3}}
gray_3 = {'g','o','u','p','c','h'}
green_4 = {4:'r'}
yellow_4 = {'r':{1},'i':{1,2},'l':{0,3}}
gray_4 = {'g','o','u','p','c','h','t','e'}
print(exercise9(green_2,yellow_2,gray_2), "need: 3")
print(exercise9(green_3,yellow_3,gray_3), "need: 38")
print(exercise9(green_4,yellow_4,gray_4), "need: 1")
### debug end ###