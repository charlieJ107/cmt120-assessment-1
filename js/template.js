const { count } = require('console');
const fs = require('fs');

const char_in_word = (char, word)=>{
    for(let c in word){
        if(c === char){
            return true;
        }
    }
    return false;
}
// Helper function for ex9 and ex10

function satisfiedWordleRule(word, green, yellow, gray){
    for(let char_index = 0; char_index < word.length; char_index++ ){
        // yellow rule
        for (let y in Object.keys(yellow)){
            if (!char_in_word(y, word)){
                return false;
            }
        }
        if (char_in_word(word[char_index], Object.keys(yellow))){
            for(let yellow_num in yellow[word[char_index]]){
                if (char_index === yellow_num){
                    return false;
                }
            }
        }
        // gray rule
        if (char_in_word(word[char_index], gray)) {
            return false;
        }
        // green rule
        if (char_in_word(char_index, Object.keys(green)) && word[char_index] != green[char_index]){
            return false
        }
    }
    return true;
}

function wordleSet(green, yellow, gray){
    res = [];
    fs.readFile("test_data/wordle.txt", (err, data)=>{
        const wordle_text = data.toString();
        for(let word in wordle_text.split("\n")){
            if(satisfiedWordleRule(word, green, yellow, gray)){
                res.push(word);
            }
        }
    });
    return res;
}

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
                if (PetalWid >= 1.6) {
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
    exercise3: (list) => {
        const sorted_origin = list.sort((a, b) => a - b);
        let sum_origin = 0;
        let sum_squared = 0
        let squared = [];
        sorted_origin.forEach(element => {
            sum_origin += element;
            let sq = element * element;
            squared.push(sq);
            sum_squared += sq;
        });
        const sorted_squared = squared.sort((a, b) => a - b);
        let mid_origin = 0;
        let mid_squared = 0;
        if (sorted_origin.length % 2 === 0) {
            mid_origin = (sorted_origin[sorted_origin.length / 2 - 1] + sorted_origin[sorted_origin.length / 2]) / 2;
            mid_squared = (sorted_squared[sorted_squared.length / 2 - 1] + sorted_squared[sorted_squared.length / 2]) / 2;
        } else {
            mid_origin = sorted_origin[Math.floor(sorted_origin.length / 2)];
            mid_squared = sorted_squared[Math.floor(sorted_squared.length / 2)];
        }
        const st_origin = [
            sorted_origin[0], // min of origin
            sum_origin / sorted_origin.length, // ave of origin
            mid_origin, // mid of origin
            sorted_origin[sorted_origin.length - 1] // max of origin
        ];
        const st_squared = [
            sorted_squared[0], // min of squared
            sum_squared / sorted_squared.length, // ave of squared
            mid_squared,  // mid of squared
            sorted_squared[sorted_squared.length - 1] // max of squred
        ];

        return [st_origin, st_squared];

    },

    // Exercise 4 - Finite-State Machine Simulator
    exercise4: (trans, init_state, input_list) => {
        state_machine = {}
        Object.keys(trans).forEach(element => {
            const input_and_state = element.split('/');
            const output_and_state = trans[element].split('/');
            const input_state = input_and_state[0];
            const input = input_and_state[1];
            if (state_machine[input_state] === undefined) {
                state_machine[input_state] = {};
            }
            state_machine[input_state][input] = output_and_state;
        });
        let res = [];
        input_list.forEach(element => {
            res.push(state_machine[init_state][element][1])
            init_state = state_machine[init_state][element][0]
        });
        return res
    },

    // Exercise 5 - Document Stats
    exercise5: (filename) => {
        fs.readFile
        const reg_arr = [
            /[a-zA-Z]/g, // letters
            /\d/g, // numbers
            /\s/g, // whitespace
            /[a-zA-Z0-9]+/g, // words
            /[a-zA-Z0-9]+[.!?]+/g, // sentences
            /\S[\n][\n]+/g // paragraph
        ];
        let res = [];
        fs.readFile("test_data/wordle.txt", (err, data) => {
            if (err) throw err;
            const wordle_text = data.toString();
            for (let reg in reg_arr)
                res.push(wordle_text.match(reg));
        });

        return res;
    },

    // Exercise 6 - List Depth
    exercise6: (l) => {
        let table = 1;
        record = false;
        for (let e in l) {
            if (typeof e == typeof []) {
                record = true;
                let ab = this.exercise6(e);
                if (ab > table) {
                    table = ab;
                }
            }
        }
        if (record === false) {
            return 1;
        } else {
            return table + 1;
        }
    },

    // Exercise 7 - Change, please
    exercise7: (amount, coins) => {

    },
    
    // Exercise 8 - Five Letter Unscramble
    exercise8: (s) => {
        let count = 0;
        const check_word = (word, wordle_list)=>{
            for(let word_in_wordle in wordle_list){
                word_to_check = word;
                all_char_in_wordle_in_s = false;
                for(let char in word_in_wordle){
                    if (char_in_word(char, word_in_wordle)){
                        all_char_in_wordle_in_s = true;
                        word_to_check.replace(char, "");
                    }else {
                        all_char_in_wordle_in_s = false;
                        break;
                    }
                }
                if (all_char_in_wordle_in_s){
                    count ++;
                }
            }
        }
        fs.readFile("test_data/wordle.txt", (err, data) => {
            if (err) throw err;
            const wordle_text = data.toString();
            check_word(s, wordle_text);
        });
        return count;
    },



    // Exercise 9 - Wordle Set
    exercise9: (green, yellow, gray) => {
        return wordleSet(green, yellow, gray).length;
    },

    // Exercise 10 - One Step of Wordle
    exercise10: (green, yellow, gray) => {
        const words = wordleSet(green, yellow, gray);
        let score = {};
        for (let wrong_word_index = 0; wrong_word_index < words.length; wrong_word_index++){
            wrong_word = words[wrong_word_index];
            score[wrong_word] = 0;
            for(let correct_word in words){
                if(correct_word === words[wrong_word_index]){
                    continue;
                }
                green_rule = {}
                yellow_rule = {}
                gray_rule = new Set();
                for(let word_char_index = 0; word_char_index < wrong_word.lengthl; word_char_index++){
                    if(wrong_word[word_char_index] === correct_word[word_char_index]){
                        green[word_char_index] = correct_word[word_char_index];
                    } else {
                        if (char_in_word(wrong_word, correct_word)){
                            if(yellow[wrong_word[word_char_index]]){
                                yellow[wrong_word_index[word_char_index]].push(word_char_index);
                            } else {
                                ellow[wrong_word_index[word_char_index]] = [word_char_index, ];
                            }
                        } else {
                            gray.add(wrong_word[word_char_index]);
                        }
                    }
                }

                for (let word in words){
                    if (satisfiedWordleRule(word, green_rule, yellow_rule, gray_rule)){
                        if(score[wrong_word]){
                            score[wrong_word]+=1;
                        } else {
                            score[wrong_word] = 1;
                        }
                    }
                }
            }
        }
        const sorted_score = Object.keys(score).sort((a, b)=>score[a] - score[b]);
        let res = Set();
        res.add(sorted_score[0]);
        for (let i in sorted_score){
            if (score[i] <= score[sorted_score[0]]){
                res.add(i);
            }
        }
        return res;
    },
}
