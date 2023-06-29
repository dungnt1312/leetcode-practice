const openQuotes = ['(', '[', '{'];
const closeQuotes = [')', ']', '}'];
const quotesMap = {
    '(': ')',
    '[': ']',
    '{': '}',
}

var isValid = function (s) {
    const isOpenings = [];
    const array = s.split('');
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (openQuotes.indexOf(element) !== -1) {
            isOpenings.push(element);
        }
        else {
            const lastQuoteOpening = isOpenings.pop();
            if (!lastQuoteOpening || quotesMap[lastQuoteOpening] !== element) {
                return false;
            }
        }
    }

    return isOpenings.length === 0;

};

// 
const result = isValid("([)]");
console.log({
    result
});