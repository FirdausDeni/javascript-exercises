let year = 2024;

function isLeapYear(fullYear) {
    if ((fullYear % 4 === 0 && fullYear % 100 !== 0) || (fullYear % 400 === 0)) {
        return `${fullYear} is a leap year.`;
    } else {
        return `${fullYear} is not a leap year.`;
    }
}

let result = isLeapYear(year);

console.log(result);