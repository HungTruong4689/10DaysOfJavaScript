'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id, scores);

        this.scores = scores;
    }

    calculate() {
        const average = this.scores.reduce((target, score) => { return target + score }) / this.scores.length;

        const range = (average < 70)
            ? Math.ceil((100 - average) / 15)
            : Math.floor((100 - average - 1) / 10);
        let letter = '';

        switch (range) {
            case -1:
            case 0:
                letter = 'O';
                break;

            case 1:
                letter = 'E';
                break;

            case 2:
                letter = 'A';
                break;

            case 3:
                letter = 'P';
                break;

            case 4:
                letter = 'D';
                break;

            default:
                letter = 'T';
                break;
        }

        return letter;
    }
}

