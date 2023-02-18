'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vol='',con='';
    for(let el of s){
        //console.log(el);
        if(el === 'a' || el === 'o' || el === 'i' || el === 'e' ||el === 'u'  ){
            //console.log(el);
            vol += el;
        }else{
            con += el;
        }
    }
    //console.log(vol)
    for(let el of vol){
        console.log(el);
    }
    for(let el of con){
        console.log(el);
    }
}

