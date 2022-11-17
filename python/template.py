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
            if PetalWid > 1.6:
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

    return minHeight < height and height < maxHeight and minWeight < weight and weight < maxWeight


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
    with open(filename, 'r') as f:
        num_alpha = 0
        num_digit = 0
        num_symbol = 0
        num_word = 0
        num_sentence = 0
        num_paragraph = 0
        last = None
        word_started = False
        for i in f.read():
            if i.isalpha():
                num_alpha += 1
                if str(last).isspace():
                    word_started = True
            elif i == '\n':
                # TODO paragraph
                if last == '\n':
                    num_paragraph += 1
                word_started = False
            elif i.isspace():
                if word_started:
                    num_word += 1
                    word_started = False
            elif i.isdigit():
                num_digit += 1
                word_started = False
            elif i == '.' or i == "?" or i == '!':
                num_symbol += 1
                num_sentence += 1
                word_started = False
            else:
                num_symbol += 1
                word_started = False
            last = i
        return [num_alpha, num_digit, num_symbol, num_word, num_sentence, num_paragraph]

# Exercise 6 - List Depth


def exercise6(l):
    # Recursive
    table = 0
    record = False
    for i in l:
        if type(i) == list:
            record = False
            ab = exercise6(i)
            if ab > table:
                table = ab

    if record == False:
        return 1
    else:
        return table + 1


# Exercise 7 - Change, please


def exercise7(amount, coins):
    return None

# Exercise 8 - Five Letter Unscramble


def exercise8(s):
    return None

# Exercise 9 - Wordle Set


def exercise9(green, yellow, gray):
    return None

# Exercise 10 - One Step of Wordle


def exercise10(green, yellow, gray):
    return None


### debug start ###
print(exercise5('test_data/text1.txt'), "need: (128, 8, 10, 36, 3, 3)")
print(exercise5('test_data/text2.txt'), "need: (84, 0, 3, 19, 1, 4)")
print(exercise5('test_data/text3.txt'), "need: ((81, 3, 12, 20, 2, 1)")
print(exercise5('test_data/text4.txt'), "need: (310, 0, 15, 74, 5, 3)")
### debug end ###