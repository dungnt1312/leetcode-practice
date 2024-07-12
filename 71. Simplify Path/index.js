/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {

    const arrayPath = path.split('/');
    let result = [];
    for (let i = 1; i < arrayPath.length; i++) {
        const value = arrayPath[i];
        if (!value) continue;
        let dots = 0;
        if (!['.', '..'].includes(value)) {
            result.push(value);
            continue;
        }
        if (value == '..') {
            if (result.length) {
                result.pop();
            }
            else {
                result = [];
            }
        }

    };


    return '/' + result.join('/')
};

console.log(simplifyPath('/hello../world'));