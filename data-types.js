// node data-types.js in the terminal to look at this.


// Truly empty data type. this is how you purposefully set something to empty. 
var emptyGlass = null;

// this is not empty, it's a string without anything in it.
var emptyGlass = ''; 

// truly undefined data type
var outspace;

// truly true or truly false Boolean data type
var truth = true;
var news = false;

// truthy--things that are generally true
if (2) {
    console.log('Truthy');
}

// falsy--things that are generally false. some languages see 0 as falsy. empty strings. undefined
if (!undefined) {
    console.log('Falsy');
}

// Numbers. anything you'd consider to be a number is a number, unless you put it in quotes
1
10.22229876
0.12987
-25678
'2' //not a number, it's a string. so '2' + '2' = 22 because it concatinated them.

console.log('2' * 2); //this will multipy the numbers, but it won't add them because + reads as a concatinated string and number. 

// always keep numbers out of strings if you want to do math with them.

console.log(Number('2') + Number('2')); //the Number function turns a string into a number. Every input field on a form is actually a string value. So you might need to convert those to numbers. 

//Math
Math.random(); 
//sometimes we need to use a random number or want to randomize the appearance of something. So Math.random does that for you.

var cosmos = Math.random() 
console.log(cosmos)
//this gives you a random number between 0 and 1. 
var cosmos = Math.random() * 100; 
console.log(cosmos)
//this gives you a number between 0 and 100.

var round = Math.round(cosmos); 
// will round to the nearest up or down whole number
console.log(round);

var ceil = Math.ceil(cosmos); 
//ceil is ceiling--rounding that goes up. always to a whole number
console.log(ceil);

var floor = Math.floor(cosmos); 
// will round down to the next whole number.
console.log(floor);

// Math is a pre-built function, so it should be i-cap. Same with Number.

// strings
var doubleQuotedString = "Hello";
var singleQuotedString = 'World\'s Best';
var multilineString = `Hey
Everyone`;

doubleQuotedString + singleQuotedString + multilineString;

var iamWhispering = "I AM WHISPERING"
iamWhispering = iamWhispering.toLowerCase();
// chaining on pure functions like lower case or upper case. not a way to do i-cap or title case.
console.log(iamWhispering);


var iAmShouting = "i am shouting";
iAmShouting = iAmShouting.toUpperCase();
console.log(iAmShouting);



// to select just one letter out of the word (or string . . . whatever)
// [variablenamehere].length will tell you how long something is. could be thingYouWhereOnYourHead.length. or word.length here because we used word as the variable name that we used.
var word = "Hat";
console.log(word.length);
// here the length is 3
word = word.slice(1, 2);
console.log(word);
console.log(word.length);
// now, the word has been sliced, and so the length is 1

var place = 'The Iron Yard';
console.log(place.slice(place.length - 4));

// to work around it not doing icap, you slice off the first letter and then concat it back on to the rest of the sentence starting it from the second letter. So we combine slice with toUpperCase . . . we don't need an end point for the third line, because we want all of the line starting on the second letter, which is place 1. or you could say 1, headline.length. But by default, it will automatically do everything that's leftover.
var headline = 'the day was cold';
var firstLetter = headline.slice(0,1).toUpperCase();
headline = firstLetter + headline.slice(1);
console.log(headline);

// make a function that we can use anywhere. the only thing that is changeable is the variable called "headline"
function iCap(headline) {
    var firstLetter = headline.slice(0,1).toUpperCase();
    headline = firstLetter + headline.slice(1);
    return headline;
}

console.log(iCap('spring is coming soon we hope'));
console.log(iCap('this is cool.'));

// trimming . . . takes out the extra spaces users always use. Cleans up input.
var userInput = '        Ragen       ';
console.log(userInput);
userInput = userInput.trim();
console.log(userInput);

// repeat things. where this might be used is to make numbers consistent or as an art thing.
var sayItAgain = "Love.";
sayItAgain = sayItAgain.repeat(500);
console.log(sayItAgain);

// say you want 00001. but the user put in 1. so we have to use repeat to add the zeros.
var sayItAgain = "0";
sayItAgain = sayItAgain.repeat(5- '1'.length) + '1';
console.log(sayItAgain);

var userInput = '1';
var filler = '0';
userInput = filler.repeat(5 - userInput.length) + userInput;
console.log(userInput);

// find out if a certain word appears within a sentence

var address = '3478374 Main Street';
var hasStreet = address.toLowerCase().includes('street');
console.log(hasStreet);
// will return a boolean
// we added the toLowerCase so that it wouldn't be case sensitive and will look at anything the user put in the form.
// in real life, it would be sent to back end, not console.log, and they would see it, not us.

// includes looks for an exact match.

// regular expressions or RegEx. will help look to see if user input has been put in properly. So like when a form tells you this isn't a real email.
var phoneNumber = '(888) 123-1234'
var isCorrectPhoneNumber = phoneNumber.match(/\d/g).length===10;
console.log(isCorrectPhoneNumber);
// regular expressions always start with a forward slash and ends with a forward slash
//  so / starts the expression \d means to look for one digit / ends the expression.
// the g is a regex flag. g stands for greedy. and that means instead of just finding the first digit and being done, to keep going through all of the matches to the pattern.
// regex can be intimidating for developers. 

// VERY SIMPLE . . . DON'T COPY . . . JUST LOOK AT FOR BASIC HOW-TO--commented it out because the variables weren't defined and made the terminal mad.
// document.getElementById('submit').addEventListener('click', function() {

//     //validate form 
//     var isCorrectPhoneNumber = phoneNumber.match(/\d/g).length===10;
//     console.log(isCorrectPhoneNumber);

//     if (!isCorrectPhoneNumber) {
//         document.getElementById('errorMessages').innerHTML = 'You have something wrong with your phone number.';
//     }
// })
// the !isCorrectPhoneNumber means it is NOT the correct one, and that's when you get the error message.

// replace any word from a string
console.log('hey world'.replace('hey', 'hello'));

// or could do it this way
var greeting = 'hey world';
greeting = greeting.replace('hey', 'hello');
console.log(greeting);

// replace is not greedy. So it replaces just the first hey. so the result of this is hello hey world.
var greeting = 'hey hey world';
greeting = greeting.replace('hey', 'hello');
console.log(greeting);

// so use a regular expression to tell it to be greedy and replace all of the heys.
var greeting = 'hey hey world';
greeting = greeting.replace(/hey/g, 'hello');
console.log(greeting);

// Dates
// gives you a crazy number that no one can read. so we don't use this.
Date.now()
console.log(Date.now());

//  momentjs.com go to display-->format and you can choose whatever format you want.

// to add it to the project, put yarn add moment in your folder.
var moment = require('moment');
console.log(moment().format('dddd'));

// currency. use accounting.js



// arrays
var listOfThings = ['Cheese', 'Pepperoni', 'Crust', 'Sauce']
console.log(listOfThings[0]);
// this one gives us the first one, because it is in position 0.

console.log(listOfThings.length);
// this gives us the length of the array.

console.log(listOfThings.reverse());
// this flips the order. this is commonly used on ecommerce sites where the user wants to sort it from lower to higher cost or new versus old things.

console.log('A sentence of characters.'.split(''));
// will convert the sentence into an array of characters

console.log('A sentence of characters.'.split(' '));
// add a space between the quotes to split by words

console.log('A sentence of characters.'.split('').reverse().join(''));
// here we've split by characters, reversed the order, and rejoined them, so the characters are now written backwards.


// objects
var anObject = {
    name: 'Ragen'
};
// name something in the var, then, to interact with that you put (this is the preferred way; console log just for seeing it in terminal in class):
console.log(anObject.name);

// could also do (console.log just for seeing it in terminal):
console.log(anObject['name']);

var anObject = {
    name: 'Hat',
    price: '$12.00'
};

console.log(JSON.stringify(anObject));

// all of JS and Ruby are based on objects.
