const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mick'];

const investors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    {first: 'Daniel', last: 'Düsentrieb', year: 1267, passed: 1301 },
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were borin in the 1500's

const fifteen = investors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    } else {
        return false;
    }
});
console.log(fifteen);