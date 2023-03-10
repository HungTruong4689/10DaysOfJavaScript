'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// binary number double
function main() {
    var n = parseInt(readLine().trim(), 10);
    
    var arr = [];
    
    while(n != 0){
        if (n%2 == 0)
            arr.push(0);
        if (n%2 == 1)
            arr.push(1);
        n = Math.floor(n/2);
    }
    
    var max = 0;
    var cur = 0;

    
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] == 1)
            cur++;
        else if (arr[i] == 0){
            if (cur > max)
                max = cur;
            cur = 0;
        }
    }
    
    if (cur > max)
        max = cur;
    
    console.log(max);
}
