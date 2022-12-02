import * as fs from 'fs';

const timer = (script, input) => {
    var start = performance.now();
    script(input);
    var end = performance.now();
    return (end - start).toFixed(2);
};

const partOne = (input) => {
    const fights=(P1,P2)=>{
        let player1=0;
        let player2=0;
        if(P1==='B'){
            player1=1;
        }else if(P1==='C'){
            player1=2;
        }
        if(P2==='Y'){
            player2=1;
        }else if(P2==='Z'){
            player2=2;
        }
        if(player1===(player2+1)%3){
            return player2+1;
        }else if(player1===player2){
            return player2+1+3;
        }else{
            return player2+1+6;
        }
    }
    const result= input.map((cur)=>{
        return fights(cur[0],cur[2]);

    });
    //console.log(result);
    return result.reduce((cur,acc)=>acc+cur,0);
};

const partTwo = (input) => {
    const fights=(P1,P2)=>{
        let player1=0;
        let player2=0;
        if(P1==='B'){
            player1=1;
        }else if(P1==='C'){
            player1=2;
        }
        if(P2==='Y'){
            player2=player1;
        }else if(P2==='Z'){
            player2=(player1+1)%3;
        }else {
            player2=(player1+2)%3;
        }
        if(player1===(player2+1)%3){
            return player2+1;
        }else if(player1===player2){
            return player2+1+3;
        }else{
            return player2+1+6;
        }
    }
    const result= input.map((cur)=>{
        return fights(cur[0],cur[2]);

    });
    //console.log(result);
    return result.reduce((cur,acc)=>acc+cur,0);
};
//
['example.in', 'puzzle.in'].forEach((file) => {
    const input = fs.readFileSync(`day2/${file}`, 'utf-8').trim().split('\r\n');
    //console.log(input);
    console.log(`Result of part one for ${file} : ` + partOne(input) + ` (executed in ${timer(partOne, input)} ms)`);
    console.log(`Result of part two for ${file} : ` + partTwo(input) + ` (executed in ${timer(partTwo, input)} ms)`);
});