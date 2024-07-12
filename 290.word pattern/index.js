/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const array = s.split(" ")
    if (pattern.length != array.length) return false;
    const temp1 = {}
    const temp2 = {}
    for (let i = 0; i < pattern.length; i++) {
        let key = pattern[i];
        let value = array[i];
        console.log({
            key,
            value
        });

        if (temp1[key] &&  typeof temp1[key] !== 'function' && temp1[key] !== value) {

            return false
        }
        if (temp2[value] && typeof temp2[value] !== 'function' && temp2[value] !== key) {

            return false
        }
        temp1[key] = value;
        temp2[value] = key;

    }
    return true;
};

const pattern = "abba", s = "dog constructor constructor dog";
console.log(wordPattern(pattern, s));;