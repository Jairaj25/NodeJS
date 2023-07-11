import * as fs from 'fs';
import _ from 'lodash';


const rawDataFromSamples = fs.readFileSync('samples.json')
const parsedData = JSON.parse(rawDataFromSamples)

// console.log(parsedData);
//Question 1
var totalCountOfMales = 0;
_.forEach(parsedData, function (value) {
    if (value.gender === 'male') {

        totalCountOfMales += 1
    }

})
console.log('Question 1: Total Number of Males in this data are:- ', totalCountOfMales, "\n\n")

//Question 2
var totalCountOfFemales = 0;
_.forEach(parsedData, function (value) {
    if (value.gender === 'female') {

        totalCountOfFemales += 1
    }

})
console.log('Question 2: Total Number of Females in this data are:- ', totalCountOfFemales, "\n\n")

//Question 3
var findPersonObject = _.find(parsedData, (element) => element.name.firstName === 'Vinay' && element.name.lastName === 'Gajjar')
console.log("Question 3: Finding Vinay Gajjar", findPersonObject, "\n", "\n")

//Question 4

var idsOfMales = []
var idsOfFemales = []
var namesOfMales = []
var namesofFemales = []
_.filter(parsedData, function (element) {
    if (element.gender === 'male') {
        return (
            idsOfMales.push(element.id),
            namesOfMales.push(`${element.name.firstName} ${element.name.lastName}`)
        )
    }
})
_.filter(parsedData, function (element) {
    if (element.gender === 'female') {
        return (
            idsOfFemales.push(element.id),
            namesofFemales.push(`${element.name.firstName} ${element.name.lastName}`)
        )
    }
})
console.log('Question 4: Display Ids of all Male objects:', "\n")
console.log('Males Users: ', idsOfMales, "\n", 'Females Users: ', idsOfFemales, "\n\n")


//Question 5

console.log('Question 5: Display names of objects: \n')
console.log('Males Users: ', namesOfMales, "\n", 'Females Users: ', namesofFemales, "\n\n")


//Question 6

var countOfMaleUsersWithInterestInC = 0
var countOfFemaleUsersWithInterestInC = 0
_.forEach(parsedData, function (value) {
    if (value.gender === 'male') {
        if (value.interests.includes('c')) {
            countOfMaleUsersWithInterestInC += 1
        }
    }
    else {
        if (value.interests.includes('c')) {
            countOfFemaleUsersWithInterestInC += 1
        }
    }
})
console.log('Question 6: Display total male users has interest in c language: \n')
console.log('Male Users: ', countOfMaleUsersWithInterestInC, "\n")


//Question 7
console.log('Question 7: Display total female users has interest in c language: \n')
console.log('Female Users: ', countOfFemaleUsersWithInterestInC, "\n\n")


//Question 8

//Display names of users with same interests NOT IMPLEMENTED
// const usersWithSimilarInterests = _.chain(parsedData).groupBy('interests')
// console.log('Question 8: ', usersWithSimilarInterests)

//Question 9

const sortedUsersWithDescOrder = _.orderBy(parsedData, ['id'], ['desc'])
console.log('Question 9: Display Sorted Users by ID in Descending Order: \n\n', sortedUsersWithDescOrder, '\n\n')

//Question 10
const sortedUsersByFirstName = _.orderBy(parsedData, ['name.firstName'], ['asc'])
console.log('Question 10: Display Sorted Users by Firstname in Descending Order: \n\n', sortedUsersByFirstName, '\n\n')