function makeFunctions(){
    let privateNum = 0;

    function privateNumFunc(){
        privateNum++;
    }

    return {
        logNum: () => console.log(privateNum),
        increement:() => {
            privateNumFunc();
            console.log("Increemented");
        }
    }
}

const { logNum, increement} = makeFunctions();
logNum()
increement()

logNum()
increement()

console.log("------------------")


for(var i =0;i<3;i++){
    setTimeout(() =>{
        console.log(i)
    },500)
    
}

console.log("------------------")

for(let i =0;i<3;i++){
    setTimeout(() =>{
        console.log(i)
    },500)
    
}