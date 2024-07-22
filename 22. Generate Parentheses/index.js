var generateParenthesis = function (n) {

    const result = [];
    const run = (str, open, close) => {
        if (open === 0) {
            while (close > 0) {
                str += ")";
                close--;
            }
        }
        else {
            if (str.endsWith("(")) {
                run(`${str}(`, open - 1, close);
                if (close) {
                    run(`${str})`, open, close - 1);
                }
            } else {
                run(`${str}(`, open - 1, close);
                if (close > 0 && open < close) {
                    run(`${str})`, open, close - 1);
                }
            }

        }

        if (open === 0 && close === 0) {
            result.push(str);
        }
    }

    run('(', n - 1, n);



    return result;
};



generateParenthesis(3);