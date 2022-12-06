import * as fs from 'fs';

const timer = (script, input) => {
    var start = performance.now();
    script(input);
    var end = performance.now();
    return (end - start).toFixed(2);
};

const partOne = (input) => {
    let index=0;
    let tab=[];
    while(tab.length<4&&index<input.length){
        tab=[];
        tab.push(input[index]);
        for(var i=1;i<4;i++){
            if(!tab.includes(input[index+i])){
                tab.push(input[index+i]);
            }else{
                break;
            }
        }
        index++;
        
    }
    return index+3;
    
};

const partTwo = (input) => {
        let index=0;
        let tab=[];
        while(tab.length<14&&index<input.length){
            tab=[];
            tab.push(input[index]);
            for(var i=1;i<14;i++){
                if(!tab.includes(input[index+i])){
                    tab.push(input[index+i]);
                }else{
                    break;
                }
            }
            index++;
            
        }
        return index+13;
};
//, 'puzzle.in'
['example.in', 'puzzle.in'].forEach((file) => {
    const input = fs.readFileSync(`day6/${file}`, 'utf-8').trim();
    //console.log(input);
    console.log(`Result of part one for ${file} : ` + partOne(input) + ` (executed in ${timer(partOne, input)} ms)`);
    console.log(`Result of part two for ${file} : ` + partTwo(input) + ` (executed in ${timer(partTwo, input)} ms)`);
});