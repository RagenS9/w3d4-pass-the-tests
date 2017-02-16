var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue(value) {
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);
// were we supposed to do something for this first one?? It already comes back as passed. . .

// Null & Undefined
function isNull(value) {
    if (value === null) {
        return true;
    }

    else {
        return false;
    }
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined(value) {
        if (value === undefined) {
        return true;
    }

    else {
        return false;
    }
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);
// console.log(isUndefined(blockOfClay));

// Strings
function convertCaseLower(value) {
    return value.toLowerCase();
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper(shh) {
    return shh.toUpperCase();
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord(whoThere, repeatValue) {
    return whoThere.repeat(repeatValue);
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');

function sliceWord(za,  firstPos, secondPos) {
    return za.slice(firstPos, secondPos);
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');
// console.log(sliceWord('I love pizza!'));

function splitWord(countriesOfU, punc) {
    return countriesOfU.split(punc);
}

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);
// console.log(splitWord('US,CA,MX,JP,UK'));

function whereIsCarmen(stripedShirt, positionIndex) {
    return stripedShirt.indexOf(positionIndex);
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);
// console.log(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', "Carmen"));

function doesItContain(locale, destination) {
    return locale.includes(destination);
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode(zipInput) {
    return zipInput.match(/\d+/)[0];
    // return zipInput.match(/\d/g).join('')
    // return zipInput.replace(/\D/g, '')
        // left in Jeff's way (2nd method) and magical third way (uses join without stating join, and D has to be capitalized) so i can study them.
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');
// console.log(extractZipCode('My zip code was 46240.'))


function extractPhoneNumber(phoneInput) {
    return phoneInput.replace(/\D/g, '');
}
// works by using .join without calling for join. because it's magical.

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');
// console.log(extractPhoneNumber('(888) 123.1234'))

// Numbers
function stringToNumber(partyLikeIts) {
    return Number(partyLikeIts);
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne(startValue) {
    return startValue += 1;
}
// Why wouldn't ++ work here? 

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(value) {
    if (value % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);
// console.log(isDivisibleByThree(9));

function makeRandomNumber(rando) {
    return rando = Math.random() * 10;
}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber(roundy) {
    return Math.ceil(roundy);
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
var moment = require('moment');
return moment().format('dddd');
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs(namey) {
    return namey.name;
};

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Ragen'}) === 'Ragen');

// Arrays
function getFirstItem(pets) {
    return pets[0];
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
