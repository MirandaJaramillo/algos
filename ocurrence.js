// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. 

// IF no occurrences can be found, a count = 0 should be returned.

// Function with TWO PARAMETERS
function strCount(string, char){
    // We want to iterate and ALSO COUNT, so we need a counter
    let count = 0;
    for (let i = 0; i < string.length; i++){
        console.log(string[i]); 
        if(string[i] === char){
            // we add one to our counter
            count++;
        }
    }
    return count;
}


// Let's test our function!

console.log("Testing!");
// EXECUTING OUR FUNCTION WITH PARAMS
console.log(strCount("world", "o"));
console.log(strCount("bananas", "a"));

console.log(strCount("", "z"));