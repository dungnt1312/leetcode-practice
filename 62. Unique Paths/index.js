

var uniquePaths = function (m, n) {


    const maxRow = m - 1;
    const maxCol = n - 1;

    const memo = new Map();

    const run = (row, col) => {

        if (row === maxRow && col === maxCol) {
            return 1;
        }
        let ways = 0;
        const key = `${row},${col}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        if (row < maxRow) {
            ways += run(col === maxCol ? maxRow : row + 1, col);
        }
        if (col < maxCol) {
            ways += run(row, row === maxRow ? maxCol : col + 1);
        }


        memo.set(key, ways);

        return ways;
    }

    return run(0, 0)

};

console.log(
    // uniquePaths(2, 1),
    // uniquePaths(2, 2),
    // uniquePaths(2, 3),
    // uniquePaths(2, 4),
    // uniquePaths(2, 5),
    // uniquePaths(2, 6),
    // '------',
    // uniquePaths(3, 1),
    // uniquePaths(3, 2),
    // uniquePaths(3, 3),
    // uniquePaths(3, 4),
    // uniquePaths(3, 5),
    // '---',
    // uniquePaths(4, 1),
    // uniquePaths(4, 2),
    // uniquePaths(4, 3),
    // uniquePaths(4, 4),
    // uniquePaths(4, 5),
    // '---',
    uniquePaths(23, 12),
);


