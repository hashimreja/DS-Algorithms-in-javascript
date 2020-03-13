//string reversal method 1
function stringreversal(str) {
    let reversedvalue = '';
    const x = str;
    const y = x.length;
    for (var i = 0; i < y; i++) {
        reversedvalue += x[(y - 1) - i];
    }
    return reversedvalue;
}
// const x = stringreversal('syedhashimreja');


//string reversal method 2
function stringreversal_array(str) {
    let x = str;
    y = x.split('').reverse().join('')
    console.log(y);
}

// stringreversal_array('hashim')

//palindrome are not
function palindrome(str) {
    let reversedvalue = '';
    const x = str;
    const y = x.length;
    for (var i = 0; i < y; i++) {
        reversedvalue += x[(y - 1) - i];
    }
    reversedvalue == str ? console.log('this is a palindrome') : console.log('this is not a palindrome');
}

// palindrome('dad')

//reverseint
function reverseint(n) {
    let reversedvalue = n.toString().split('').reverse().join('');
    reversedvalue = parseInt(reversedvalue)
    if (n < 0) {
        return reversedvalue * -1;
    } else {
        return reversedvalue;
    }
}
// reverseint(-123)

//maxchar algorithm
function getmaxchar(str) {
    let charobject = {};
    let maxchar = '';
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        charobject[str[i]] = charobject[str[i]] + 1 || 1;
        if (charobject[str[i]] > count) {
            maxchar = str[i]
            count = charobject[str[i]]
        }
    }
    return console.log(maxchar)
}

// getmaxchar('yoooo')

//fizzbuzz algorithm
function fizzbuzz(n) {
    for (var i = 0; i < n; i++) {
        if (((i + 1) % 5) == 0 && ((i + 1) % 3) == 0) {
            console.log('fizzbuzz');
        }
        else if (((i + 1) % 3) == 0) {
            console.log('fizz')
        }
        else if (((i + 1) % 5) == 0) {
            console.log('buzz')
        }
        else {
            console.log((i + 1))
        }
    }
}

// fizzbuzz(20);

//function first letter of a string to upper case
function uppercase(str) {
    let x = str;
    let y = x.split(' ')
    for (var i = 0; i < y.length; i++) {
        y[i] = y[i][0].toUpperCase() + y[i].slice(1).toLowerCase()
    }
    let result = y.join(' ')
    console.log(result);
}

// uppercase('syed hashim reja')

//function create 2d arrays
function multidimensionalarrays(arr, num) {
    let z = new Array;
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        z.push(arr.splice(count, (num + count)));
        count == num;
    }
    return z
}
// multidimensionalarrays([5,4,3,2,1,0],3)

//anagrams
function anagrams(stringA, stringB) {
    stringA = stringA.toLowerCase().replace(/!/, " ")
    stringB = stringB.toLowerCase().replace(/!/, " ")
    let x = stringA.split('')
    let y = stringB.split('')
    for (var i = 0; i < x.length; i++) {
        if (y.includes(x[i]) == false) {
            return false
        }
    }
    return true
}

// let x = anagrams('Heart','  earth');

//ceaser cipher
function ceaserCipher(str, num) {
    let x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let y = str.split('')
    let result = new Array
    for (j = 0; j < y.length ; j++) {
        for (var i = 0; i < x.length; i++) {
            if(y[j] == x[i] && x[i] == 'z'){
                result.push(x[num-1])
            }
            else if (y[j] == x[i]) {
                result.push(x[i+num])
            }
        }
    }
    return result.join('')
}

// let result = ceaserCipher('abcd',100);

//steps algorithm 
function steps(n){
    for(var i = 1 ; i <= n ; i++){
        let result = '';
        result += '#'.repeat(i)
        result += ' '.repeat(n-i)
        console.log(result);
    }
}
// steps(5)

//pyramid function
function pyramid(n){
    for(var i=1; i<= n; i++){
        let x = '';
        x += ' '.repeat(n-i)
        x += '#'.repeat(i*2-1)
        x += ' '.repeat(n-i)
        console.log(x)
    }
    console.log('        ||         ')
    console.log('        ||         ')
    console.log('      ==||==       ')
}

// pyramid(10)

//function for counting vowels
function countvowels(str){
    str = str.toLowerCase();
    let vowels = 'aeiou'.split('')
    let count = 0;
    for(var i = 0 ; i<= str.length ; i++){
        if(vowels.includes(str[i])){
            count += 1;
        }else{
            continue
        }
}
return count;
}

// let x = countvowels('aEiOu');

//linear search

const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

function linearincludessearch(array,item){
        if(array.includes(item)){
            return true
        }else{
            return false
        }
}

// let x = linearincludessearch(foods,"pizza")

function linearindexsearch(array,item){
    return array.indexOf(item)
}

// let x = linearindexsearch(foods,"pizza");

function linearfindsearch(array,item){
    array.find(data => data === item)
    return item
}

// linearfindsearch(foods,"pizza")


//binary searhc alogorithm 

function binarysearch(arr,value){
    arr = arr.split('');
    arr = arr.sort();
    if(arr.includes(value) == true){
        return arr.indexOf(value)
    }else{
        return -1
    }
}

// const x = binarysearch('hashim','a');

//string pattern search algorithm
function stringpatternsearch(text,pattern){
    let x = text.split('');
    let y = pattern.split('');
    let count = 0;
    for(var i =0 ; i <= x.length ; i ++){
        for(j= 0 ; j <= y.length ; j++){
           if(x[i + j] !== y[j]){
               break;
           }else if(j === y.length-1){
            count++;
           }
        }
    }
return count;
}

// let x = stringpatternsearch('hashimhas', 'has')

//implementing bubble sort
//step-1 swapping number
//bubble sort
function bubblesort(arr){
    for(var j =0 ; j<arr.length ; j++){
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i] > arr[i+1]){
                let x = arr[i];
                let y= arr[i+1];
                arr[i+1] = x ;
                arr[i] = y ;
            }else if(arr[i] < arr[i+1]){
                continue
            }
        }
    }
    return arr;
}

// let x = bubblesort([5, 1, 3, 7, 6, 2, 4])


//merge sort
function mergesort(arr1,arr2){
    for (var i = 0; i< arr2.length ; i++){
        arr1.push(arr2[i])
        
    }
    return bubblesort(arr1);
}

// let x = mergesort([1,3],[2,4]);
