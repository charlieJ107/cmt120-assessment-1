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


def exercise3(l):
    return None

# Exercise 4 - Finite-State Machine Simulator


def exercise4(trans, init_state, input_list):
    return None

# Exercise 5 - Document Stats


def exercise5(filename):
    return None

# Exercise 6 - List Depth


def exercise6(l):
    return None

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
