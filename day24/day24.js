import * as fs from 'fs';

const timer = (script, input) => {
    var start = performance.now();
    script(input);
    var end = performance.now();
    return (end - start).toFixed(2);
};

const partOne = (input) => {
    
};

const partTwo = (input) => {

};
//, 'puzzle.in'
['example.in'].forEach((file) => {
    const input = fs.readFileSync(`day24/${file}`, 'utf-8').trim().split('');
    //console.log(input);
    console.log(`Result of part one for ${file} : ` + partOne(input) + ` (executed in ${timer(partOne, input)} ms)`);
    console.log(`Result of part two for ${file} : ` + partTwobis(input) + ` (executed in ${timer(partTwo, input)} ms)`);
});