const priority=(string,index)=>{
    const charCode=string.charCodeAt(index);
    if((charCode-95)<0){
        return charCode-38;
    }else{
        return charCode-96;
    }
};
const caractère=(priority)=>{
    if(priority<27){
        return String.fromCodePoint(priority+96);
    }else{
        return String.fromCodePoint(priority+38);
    }
};
const letter="A";
const string="vJrwpWtwJgWrhcsFMMfFFhFp";
console.log(String.fromCodePoint(99,100));