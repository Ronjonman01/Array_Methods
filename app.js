/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(array) {
    array.forEach((element,index) => {
        array[index]= element*2;    
    });
    return (array);
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    let array = [];
    let arrayIndex = 0;
    arr.forEach(element => {
        if(element%2===0){
            array[arrayIndex] = element
            arrayIndex++
        }
    });
    return (array);
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(array) {
    let newArray = []
    array.forEach((element,index) => {
        newArray[index] = element[0] + element[element.length-1];
    });
    return(newArray);
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(array,key,value) {
    array.forEach(element => {
        element[key] = value;
    })
    return(array)
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(string) {
    let object = {
        a:'0',
        e:'0',
        i:'0',
        o:'0',
        u:'0',
    }

    let array = Array.from(string)
    let letter = ""
    let aCount = 0

    array.forEach(element => {
        letter = element.toLowerCase()
        if(letter ==='a' || letter ==='e' ||letter ==='i'||letter ==='o'||letter ==='u') {
            object[letter] = parseInt(object[letter])+1
        }
    });
    Object.keys(object).forEach(element => {
        if(object[element] ==='0') {
            delete object[element];
        }
    });
   
    return(object)
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(array) {
    array = array.map(element => element *2);
    return(array)
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(array) {
    let index = 0;
    array = array.map((element,index) => element*index);
    return(array)
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(array,key) {
    newArray = [];
    array.map(element => newArray.push(element[key]));
    return(newArray);
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(inputArray){
    let fullNameArray = inputArray.map(function(element,index,mapArray) {
        return(element['first']+ " " +element['last'])    
        })
    return(fullNameArray)
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    let filteredArray = arr.filter(element => {
        if(element[key]!=undefined) {
            return(element)
        }
    })
    return(filteredArray)
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    let answer = 0
    let answerArray = arr.filter(element => {
        if(element ===searchValue){
            return(element)
        }
    })
    if(answerArray.length >1) {
        while(answerArray.length>1){
            answerArray.pop()
        }
    }
    if(answerArray.length ===1) {
        answer = answerArray[0]
    }
    if(answerArray.length===0){
        answer=undefined
    }
    return(answer)
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
let answerArray = arr.filter(element => {
    if(element[key] === searchValue){
        return element
    }
})
let answer = answerArray[0]
return answer
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let vowels = 'aeiou'
    let strArray = Array.from(str)
    let answer = []
    strArray.filter((element,index) => {
        if(vowels.indexOf(element.toLowerCase())=== -1){
            answer.push(element.toLowerCase())
        }
    })
    return answer.join('')
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(array) {
    let evens = onlyEvenValues(array)
    evens.forEach((element) => {
        array.splice(array.indexOf(element),1)
        console.log(array)
    });
    doubleValues(array)
    return array
}