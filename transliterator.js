/*
 * This script outputs a string transliterated from esperanto into the file result.txt (will create it if inexistent).
 * Please configure the capitalised variables before running the script with nodejs
 */

// The STRING variable defines the string, in esperanto, to transliterate
const STRING = ``;
//The ALPHABET variable defines which alphabet to transliterate into. Currently supported alphabets are "deseret" and "shavian".
const ALPHABET = 'deseret'

const fs = require('fs');
const phoneticKey = require('./PhoneticKey.json');

//output is the string that will be altered all the way
let output = STRING.toLowerCase();

//separating diphtongs from the rest
let sounds = {}
Object.assign(sounds, phoneticKey);
let diphtongs = {}
Object.assign(diphtongs, phoneticKey.diphtongs);

delete sounds.diphtongs;

//replacing esperanto diphtongs
for (let i = 0;i < Object.keys(diphtongs).length;i++) {
    let key = Object.keys(diphtongs)[i];
    output = output.replace(diphtongs[key].esperanto, diphtongs[key][ALPHABET]);
}
output = output.split('');

//replacing the rest
for (i = 0;i < output.length;i++) {
    for (let j = 0;j < Object.keys(sounds).length;j++) {
        let value = Object.values(sounds)[j].esperanto;
        if (value == output[i]) {
            output[i] = Object.values(sounds)[j][ALPHABET];
            break;
        }
    }
}

//outputs the result into result.txt because console.log sucks
fs.writeFileSync('./result.txt', output.join(''));