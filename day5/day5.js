import * as fs from 'fs';

const timer = (script, input) => {
    var start = performance.now();
    script(input);
    var end = performance.now();
    return (end - start).toFixed(2);
};

const partOne = (input) => {
    let i=0;
    while(input[i][0]!='m'){
        i++;
    }
    const crate_stacks=input[i-2].split('   ').map(x=>x.trim().split('').map(Number));
    for(let instruction=i-3;instruction>=0;instruction--){
        const line=[];
        for(let character=0;character<crate_stacks.length;character++){
            line.push(input[instruction][4*character+1]);
        }
        line.map((cur,ind)=>{
            if(cur!==' '){
                crate_stacks[ind].push(cur);
            }
    })           
    }
    for(let instruction=i;instruction<input.length;instruction++){
        const line=input[instruction].split(' ');
        const quantity=line[1];
        const origin_crate=line[3];
        const dest_crate=line[5];
        for(let crates=0;crates<quantity;crates++){
            crate_stacks[dest_crate-1].push(crate_stacks[origin_crate-1].pop());
        }
    }
    const message=crate_stacks.reduce((acc,cur)=>acc+cur[cur.length-1],"")
    return message;
};

const partTwo = (input) => {
    let i=0;
    while(input[i][0]!='m'){
        i++;
    }
    const crate_stacks=input[i-2].split('   ').map(x=>x.trim().split('').map(Number));
    for(let instruction=i-3;instruction>=0;instruction--){
        const line=[];
        for(let character=0;character<crate_stacks.length;character++){
            line.push(input[instruction][4*character+1]);
        }
        line.map((cur,ind)=>{
            if(cur!==' '){
                crate_stacks[ind].push(cur);
            }
    })
    }
    for(let instruction=i;instruction<input.length;instruction++){
        const line=input[instruction].split(' ');
        const quantity=line[1];
        const origin_crate=line[3];
        const dest_crate=line[5];
        const crane=crate_stacks[origin_crate-1].splice(-quantity);
        crane.map(x=>crate_stacks[dest_crate-1].push(x));
    }
    const message=crate_stacks.reduce((acc,cur)=>acc+cur[cur.length-1],"")
    return message;
};
//, 'puzzle.in'
['example.in', 'puzzle.in'].forEach((file) => {
    const input = fs.readFileSync(`day5/${file}`, 'utf-8').split('\r\n');
    // console.log(input);
    console.log(`Result of part one for ${file} : ` + partOne(input) + ` (executed in ${timer(partOne, input)} ms)`);
    console.log(`Result of part two for ${file} : ` + partTwo(input) + ` (executed in ${timer(partTwo, input)} ms)`);
});