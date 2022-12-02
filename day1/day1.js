import * as fs from 'fs';

const timer = (script, input) => {
    var start = performance.now();
    script(input);
    var end = performance.now();
    return (end - start).toFixed(2);
};

const partOne = (input) => {

return input.reduce((acc,cur)=>{
    const parse=cur.split('\r\n').map(Number);
    //console.log(parse);
    const sum=parse.reduce((acc2,cur2)=>{return acc2+cur2},0);
    return Math.max(sum,acc);
},0);
    
};

const partTwo = (input) => {
    const top3=[];
    let sum=input.map(cur=>{const parse=cur.split('\r\n').map(Number);
        //console.log(parse);
        return parse.reduce((acc2,cur2)=>{return acc2+cur2},0);});
        //console.log(sum);
    for(var i=0;i<3;i++){
        top3.push(sum.reduce((cur,acc)=>Math.max(cur,acc),0));
        //console.log(top3);
        sum[sum.indexOf(top3[i])]=0;
    }
    //console.log(top3);

    return top3.reduce((cur,acc)=>acc+cur,0);
};
//, 'puzzle.in'
['example.in'].forEach((file) => {
    const input = fs.readFileSync(`day1/${file}`, 'utf-8').trim().split('\r\n\r\n');
    console.log(input);
    console.log(`Result of part one for ${file} : ` + partOne(input) + ` (executed in ${timer(partOne, input)} ms)`);
    console.log(`Result of part two for ${file} : ` + partTwo(input) + ` (executed in ${timer(partTwo, input)} ms)`);
});