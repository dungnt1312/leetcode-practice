var generate = function (numRows) {
    // 118. Pascal's Triangle
    if (numRows === 1) return [[1]];
    const result = [[1], [1, 1]];
    if (numRows === 2) return result;
    for (let i = 2; i < numRows; i++) {
        const row = []
        for (let j = 0; j <= i; j++) {
            const value = j === 0 || j === i ? 1 : (result[i - 1][j - 1] + result[i - 1][j]);
            row.push(value);
        }
        result.push(row)
    }
    return result;
};



console.log(generate(10));