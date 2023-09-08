    const arr = [1,2,3]

    // Anonymous
    const doubled = arr.map(function(num){
        return num*2
    })
    console.log(doubled)

    // Arrow
    const tripled = arr.map((num)=>num*3)
    console.log(tripled)
