function objectDecleration(){
    const website = {
        name: "Saba",
        course: "JavaScript",
        ratings: 5,
        'other courses': ['React', 'CSS']
      }
     
     console.log(website)
     console.log(website.name)
     console.log(website['other courses'])
     
     website.country = 'US'
     // console.log(website)
     delete website.country;
     // console.log(website)
     
     const obj = {}
     console.log({} == {}) //false
     console.log({} === {}) //false
     console.log(obj === {}) //false
     console.log(obj === obj) //true
}

// objectDecleration()

function objectConstructor(){
// To initialize values of objects via constructor

    const car = {
        name: 'Hyundai',
        price: '40K',
        drivers: ['Saba','Adi']
    };
    
    function Car(name, price, drivers) {
        this.name = name;
        this.price = price;
        this.drivers = drivers;
    };
    
    const car2 = new Car('Kia','30K',['Saba','Adi']);
    console.log(car2);
}

// objectConstructor()

function symbol(){
    const id = Symbol('id')
    const id1 = Symbol('id')
    console.log(id)
    console.log(id1)
    console.log(id ==  id1)
}
// symbol()

function getSet(){
    const laptop = {
        name : 'Dell',
        color: 'Black',
        core: 'Dual',
        discount(){
        console.log('New year discount')
    },
    
    set setCore(value){
        this.core = value
    },
    get getCore(){
        return this.core;
        }
    }

    const charger = {
        __proto__: laptop,
        price: '10'
    }
    
    console.log(laptop.hasOwnProperty('name'))
    laptop.discount()
    laptop.setCore = "Octa"
    console.log(laptop.core)

    // console.log("Charger",charger)

    // iteration:
    for (key in charger){
        console.log("Charger",key)
    }
}
// getSet()

function primitives(){
    // Objects to Primitives

    const laptop = {
        name : 'Dell',
        color: 'Black',
        core: 'Dual',
    };

    laptop.toSomething = function () {
    return "Hello World"
    }

    laptop.valueOf = function () {
    return 2
    }

    // If Symbol is present in the declaration, then that superceedes

    console.log(laptop.toSomething())
    console.log(Number(laptop))
}

primitives()