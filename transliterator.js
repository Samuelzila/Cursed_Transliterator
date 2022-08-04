function transliterate() {
    // The STRING variable defines the string, in esperanto, to transliterate, and is taken from the input textarea
    const STRING = document.getElementById('input').value;
    //The ALPHABET variable defines which alphabet to transliterate into.
    //Currently supported alphabets are "deseret" and "shavian".
    const ALPHABET = document.getElementById('alphabet').value;

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

    //Joins all sounds into a string
    output = output.join('');
    //output results into output textarea
    document.getElementById('output').value = output;
}