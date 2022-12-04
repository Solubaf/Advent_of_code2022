import * as fs from 'fs';

const timer = (script, input) => {
    var start = performance.now();
    script(input);
    var end = performance.now();
    return (end - start).toFixed(2);
};

const partOne = (input) => {
    const priority=(string,index)=>{
        const charCode=string.charCodeAt(index);
        if((charCode-95)<0){
            return charCode-38;
        }else{
            return charCode-96;
        }
    };
    // const caractère=(priority)=>{
    //     if(priority<27){
    //         return String.fromCodePoint(priority+96);
    //     }else{
    //         return String.fromCodePoint(priority+38);
    //     }
    // };
    const results=input.map((cur)=>{
        const part1=cur.slice(cur.length/2);
        //console.log(part1);
        const part2=cur.slice(0,cur.length/2);
        const priority1=[];
        const priority2=[];
        for(var i=0;i<part1.length;i++){
            priority1.push(priority(part1,i));
            priority2.push(priority(part2,i));
        }
        priority1.sort(function(a,b){return a-b;});
        priority2.sort(function(a,b){return a-b;});
        //console.log(priority1);
        //console.log(priority2);
        let var1=0;
        let var2=0;
        let length=2;
        while(length<cur.length&&priority1[var1]!=priority2[var2]){
            if (priority1[var1]<priority2[var2]){
                var1++;
            }else{
                var2++;
            }
            length++;
        }
        //console.log(priority(`${caractère(priority1[var1])}`,0));
        return priority1[var1];

    })
    return results.reduce((acc,cur)=>acc+cur);
};

const partTwo = (input) => {
    const parse=[];
    for(var j=0;3*j<input.length;j++){
        parse.push(input[3*j]+"/"+input[3*j+1]+"/"+input[3*j+2]);
    }
    const clean_input=parse.map(cur=>cur.split("/"));
    // console.log(clean_input);
    const priority=(string,index)=>{
        const charCode=string.charCodeAt(index);
        if((charCode-95)<0){
            return charCode-38;
        }else{
            return charCode-96;
        }
    };
    const common_priorities=(priority1,priority2)=>{
        let vari=0;
        const result=[];
        while(vari<Math.max(priority1.length,priority2.length)){
            if (priority1.length>priority2.length){
                if(priority2.includes(priority1[vari])&&!(result.includes(priority1[vari]))){
                    result.push(priority1[vari]);
                }else{}
            }else{
                if(priority1.includes(priority2[vari])&&!(result.includes(priority2[vari]))){
                    result.push(priority2[vari]);
                }else{}
            }
            vari++;
        }
        return result;

    };
    const doublons=(part1,part2)=>{
        // console.log(part1);
        // console.log(part2);
        const priority1=[];
        const priority2=[];
        for(var i=0;i<part1.length;i++){
            priority1.push(priority(part1,i));
        }
        for(var i=0;i<part2.length;i++){
            priority2.push(priority(part2,i));
        }
        return common_priorities(priority1,priority2);
    }
    const results=clean_input.map(cur=>common_priorities(doublons(cur[0],cur[1]),doublons(cur[1],cur[2]))[0])
    console.log(results);
    return results.reduce((acc,cur)=>acc+cur);
};
//, 'puzzle.in'
['example.in', 'puzzle.in'].forEach((file) => {
    const input = fs.readFileSync(`day3/${file}`, 'utf-8').trim().split('\r\n');
    //console.log(input);
    console.log(`Result of part one for ${file} : ` + partOne(input) + ` (executed in ${timer(partOne, input)} ms)`);
    console.log(`Result of part two for ${file} : ` + partTwo(input) + ` (executed in ${timer(partTwo, input)} ms)`);
});