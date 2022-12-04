import * as fs from 'fs';

const timer = (script, input) => {
    var start = performance.now();
    script(input);
    var end = performance.now();
    return (end - start).toFixed(2);
};

const partOne = (input) => {
    return input.reduce((acc,cur)=>{
        const pairs=cur.split(',').map(x=>x.split('-').map(Number));
        if((pairs[0][0]<=pairs[1][0])&&(pairs[0][1]>=pairs[1][1])||(pairs[0][0]>=pairs[1][0])&&(pairs[0][1]<=pairs[1][1])){
            return acc+1;
        }else{
            return acc;
        }
    },0);
    
};

const partTwo = (input) => {
    return input.reduce((acc,cur)=>{
        const pairs=cur.split(',').map(x=>x.split('-').map(Number));
        if((pairs[0][1]>=pairs[1][0])&&(pairs[1][1]>=pairs[0][0])||(pairs[0][1]<=pairs[1][0])&&(pairs[1][1]<=pairs[0][0])){
            console.log(pairs);
            return acc+1;
        }else{
            return acc;
        }
    },0);
};
//
['example.in', 'puzzle.in'].forEach((file) => {
    const input = fs.readFileSync(`day4/${file}`, 'utf-8').trim().split('\r\n');
    // console.log(input);
    console.log(`Result of part one for ${file} : ` + partOne(input) + ` (executed in ${timer(partOne, input)} ms)`);
    console.log(`Result of part two for ${file} : ` + partTwo(input) + ` (executed in ${timer(partTwo, input)} ms)`);
});