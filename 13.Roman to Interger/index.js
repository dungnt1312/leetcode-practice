const symbolMaps = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    Q: 4,
    W: 9,
    E: 40,
    R: 90,
    T: 400,
    Y: 900
}
const replaceMaps = {
    'IV': 'Q',
    'IX': 'W',
    'XL': 'E',
    'XC': 'R',
    'CD': 'T',
    'CM': 'Y',
}


var romanToInt = function (s) {
    for (const key in replaceMaps) {
        s = s.replaceAll(key, replaceMaps[key])
    }
    return s.split('').reduce((before, current) => {
        return before + symbolMaps[current];
    }, 0)

};


const result = romanToInt('MCMXCIV');
console.log({ result });