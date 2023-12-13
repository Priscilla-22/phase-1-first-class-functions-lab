// Code your solution in this file!

//returns the first two drivers in the array
const drivers = ['driver1', 'driver2', 'driver3', 'driver4'];
const returnFirstTwoDrivers = function(drivers ) {
    return drivers.slice(0, 2);
}
const firstTwo = returnFirstTwoDrivers(drivers);
console.log(firstTwo);

//returns the last two drivers in the array.
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
const lastTwo = returnLastTwoDrivers(drivers);
console.log(lastTwo);

//This is an array containing two elements: the two functions that we previously defined
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[1](drivers));
console.log(selectingDrivers[0](drivers));

//his is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride
const createFareMultiplier = function(multiply) {
return function(fare) {
 return fare * multiply;
 }
}
const fareQuintupler = createFareMultiplier(5);
const totalFare = fareQuintupler(5)
console.log(totalFare);

const fareDoubler = createFareMultiplier(2);
const fareTotal = fareDoubler(6);
console.log(fareTotal);

const fareTripler = createFareMultiplier(3);
const tripleFare = fareTripler(12);
console.log(tripleFare);

///This function takes two arguments, an array of drivers and either the function
const  selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
return returnFirstTwoDrivers(drivers);
}
const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers); 