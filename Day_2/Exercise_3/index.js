import _ from 'lodash'

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//Question 1
const question1 = []
_.forEach(companies, (value) => {
    question1.push(value.name)
})

console.log('Question 1: Display name of companies: \n', question1)

//Question 2
const companiesAfter1987 = []
_.filter(companies, (value) => {
    if (value.start > 1987) {
        companiesAfter1987.push(value.name)
    }
})

console.log('\n\nQuestion 2: Display name of companies started after 1987: \n', companiesAfter1987)

//Question 3

const companiesDescOrderByEndDate = _.orderBy(companies, ['end'], ['asc'])

console.log('\n\nQuestion 3: Sort Companies by their end date: ', companiesDescOrderByEndDate)

//Question 4

const arrayAgesOfCompany = []
_.forEach(companies, (value) => {
    arrayAgesOfCompany.push(value.end - value.start)
})

console.log('\n\nQuestion 4: Sort Ages array in desc order: ', _.sortBy(arrayAgesOfCompany).reverse())

//Question 5
console.log('\n\nQuestion 5: Sum Ages array using reduce: ', arrayAgesOfCompany.reduce((a, b) => { return a + b; }))

//Question 6

const company2 = {
    name: "Comapny one",
    category: "Finance"
}
const destructuringObject = ({name, category}) =>{
    console.log (`${name}, ${category}`)
}
console.log('\n\nQuestion 6: Destructuring of objects and display it: ')
destructuringObject(company2)

//Question 7 
function addArgs(...args) {
    return args.reduce((a, b) => { return a + b })
}
console.log('\n\nQuestion 7: Sum of numbers with different numbers of arguments: ')
console.log(addArgs(2, 3, 4, 5))
console.log(addArgs(2, 3, 4))
console.log(addArgs(2, 3))
console.log(addArgs(2))

//Question 8

function addArrays(...args) {
    const sum = [];

    args.forEach(arg => {
        if (Array.isArray(arg)) {
            sum.push(...arg);
        }
        else {
            sum.push(arg);
        }
    });

    return sum;
}

const addedArrays = addArrays([1, 2, 3], [4, 5], 6, 'Jairaj');
console.log('\n\nQuestion 8: Add value and arrays to array: ', addedArrays);

//Question 9
var count = -1
const callIncreCount = () => {
    return count += 1;
   
}
console.log('\n\nQuestion 9: Increase count everytime function is called: ')
console.log(callIncreCount())
console.log(callIncreCount())
console.log(callIncreCount())
console.log(callIncreCount())
console.log(callIncreCount())

//Question 10

//create a function that destructures the query parameters of a URL and adds them in an object as key value pairs and then returns the objects