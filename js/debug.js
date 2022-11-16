const exercise1 = (SepalLen, SepalWid, PetalLen, PetalWid) => {
    let setosa = "setosa";
    let versicol = "versicolor";
    let virginic = "virginica";
    // [2, 2, 5.3, 1.6]
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
}
const exercise3 = (list) => {
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

}

const EXERCISE4_TESTS = [
    {
        input: [{ "a/0": "a/1", "a/1": "a/0" },
            'a',
        ['0', '0', '1', '1', '0', '0']
        ],
        output: ['1', '1', '0', '0', '1', '1']
    },
    {
        input: [
            { "a/0": "a/1", "a/1": "b/0", "b/0": "b/0", "b/1": "a/1" },
            'a',
            ['0', '0', '1', '1', '0', '0']
        ],
        output: ['1', '1', '0', '1', '1', '1']
    },
    {
        input: [
            {
                "0/0": "0/NaN",
                "0/1": "0/NaN",
                "0/\n": "0/0",
                "1/0": "0/NaN",
                "1/1": "1/NaN",
                "1/\n": "1/1",
            },
            '1',
            ['1', '1', '\n']
        ],
        output: ['NaN', 'NaN', '1']
    },
    {
        input: [
            {
                "0/0": "0/NaN",
                "0/1": "0/NaN",
                "0/\n": "0/0",
                "1/0": "0/NaN",
                "1/1": "1/NaN",
                "1/\n": "1/1",
            },
            '1',
            ['1', '0', '1', '\n']
        ],
        output: ['NaN', 'NaN', 'NaN', '0']
    }
]

const exercise4 = (trans, init_state, input_list) => {
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
}


const res = exercise4({
    "0/0": "0/NaN",
    "0/1": "0/NaN",
    "0/\n": "0/0",
    "1/0": "0/NaN",
    "1/1": "1/NaN",
    "1/\n": "1/1",
}, '1', ['1', '0', '1', '\n']);
console.log(res);
//['1', '1', '0', '1', '1', '1']