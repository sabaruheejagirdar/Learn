//ANONYMOUS AND ARROW FUNCTION
//REST
//SPREAD
//NULL COALESCING

// Anonymous and arrow function
function anonymousArrow() {
    const arr = [1,2,3]

    // Anonymous
    const doubled = arr.map(function(num){
        return num*2
    })
    console.log(doubled)

    // Arrow
    const tripled = arr.map((num)=>num*3)
    console.log(tripled)

}
// anonymousArrow()

// rest and spread
function restNspread() {
    const arr1 = [1,2,3,4,5];
    const [first, second, ...rest] = arr1
    console.log(first);
    console.log(second);
    console.log(rest);
  
    const arr2 = [2,4,6,8];
    function add(x,y){
      console.log(x+y);
    }
    add(...arr2)
  
    const combined = [0,...arr1,4.5,...arr2,10]
    console.log(combined);
  }
  restNspread()


  // Null coelesing and optional chaining
function null_optionalChaining(){
    const name = null;
    defaultName = name ?? "User";

    console.log(defaultName)

    // optional chaining
    const person = {
        company:{
        website: 'SabaRuhee.com'
        }
    }
    console.log(person?.cccc?.website) //undefined
    console.log(person?.company?.website) //SabaRuhee.com
    console.log(person?.cccc?.website ?? 'fooo') //Fooo
}
  
  null_optionalChaining()

 
//short circuit evaluation
function shortCircuitEvaluation(){
    const shouldRunCode = true;
    function logWorld() {
        console.log("Hello World")
    }

    shouldRunCode && logWorld();
}
shortCircuitEvaluation()
  