// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let average = 0;
    let av_array = [];
    
    for (let num of numbers){
        if (typeof num === "number"){
            av_array.push(num);
            average += num
        }
    }
    return average / av_array.length
}

module.exports = average;
