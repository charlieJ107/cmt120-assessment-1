const fs = require('fs');

module.exports = {

    // Exercise 1 - Iris Species Classifier
    exercise1: (SepalLen, SepalWid, PetalLen, PetalWid) => {
        let setosa = "setosa";
        let versicol = "versicolor";
        let virginic = "virginica";
        if (PetalLen < 2.5) {
            return setosa;
        } else if (PetalWid < 1.8) {
            if (PetalLen < 5) {
                if (PetalWid < 1.7) {
                    return versicol;
                }
                else {
                    return virginic;
                }
            } else {
                if (PetalWid > 1.6) {
                    if (PetalLen < 7) {
                        return versicol;
                    } else {
                        return virginic;
                    }
                } else {
                    return virginic;
                }
            }
        } else {
            if (PetalLen < 4.9) {
                if (SepalLen < 6) {
                    return versicol;
                } else {
                    return virginic;
                }
            } else {
                return virginic;
            }
        }
    },

    // Exercise 2 - Dog Breeds Standards
    exercise2: (breed, height, weight, male) => {
        let gender = male ? "male" : "female";
        breedMap = {
            "Bulldog": {
                "male": {
                    height: 15,
                    weight: 50
                },
                "female": {
                    height: 14,
                    weight: 40
                }
            },
            "Dalmatian": {
                "male": {
                    height: 24,
                    weight: 70
                },
                "female": {
                    height: 19,
                    weight: 45
                }
            },
            "Maltese": {
                "male": {
                    height: 9,
                    weight: 7
                },
                "female": {
                    height: 7,
                    weight: 6
                }
            }
        }
        let minHeight = breedMap[breed][gender].height * 0.9;
        let maxHeight = breedMap[breed][gender].height * 1.1;
        let minWeight = breedMap[breed][gender].weight * 0.9;
        let maxWeight = breedMap[breed][gender].weight * 1.1;
        return minHeight < height && height < maxHeight &&
            minWeight < weight && weight < maxWeight;
    },

    // Exercise 3 - Basic Statistics
    exercise3: (l) => {
        return undefined;
    },

    // Exercise 4 - Finite-State Machine Simulator
    exercise4: (trans, init_state, input_list) => {
        return undefined;
    },

    // Exercise 5 - Document Stats
    exercise5: (filename) => {
        return undefined;
    },

    // Exercise 6 - List Depth
    exercise6: (l) => {
        return undefined;
    },

    // Exercise 7 - Change, please
    exercise7: (amount, coins) => {
        return undefined;
    },

    // Exercise 8 - Five Letter Unscramble
    exercise8: (s) => {
        return undefined;
    },

    // Exercise 9 - Wordle Set
    exercise9: (green, yellow, gray) => {
        return undefined;
    },

    // Exercise 10 - One Step of Wordle
    exercise10: (green, yellow, gray) => {
        return undefined;
    },
}
