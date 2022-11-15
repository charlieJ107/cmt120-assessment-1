
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

const testcase = [
    { input: [[1, 2, 3, 4, 5]], output: [[1, 3, 3, 5], [1, 11, 9, 25]] },
    { input: [[7, 2, 4, 5]], output: [[2, 4.5, 4.5, 7], [4, 23.5, 20.5, 49]] }
];
const res = exercise3(testcase[1].input[0]);
res.forEach(e => console.log(e));

// [2, 4.5, 6, 7]
// [4, 23.5, 37, 49]