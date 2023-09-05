class Car{
    static isCar = true; // attached only to the object Car, 
    // but not the instances created from it
    constructor(carName){
      this.carName = carName
    }
    cost = 20000;
    abc = 1;
    greet(){
      console.log("Hello : this is "+this.carName)
    }
  }
  
  const kia = new Car("Kia");
  kia.greet()


// SUPER- calls the constructor of the class that we're inheriting from

class SUV extends Car{
    constructor(carName){
        super(carName)
        this.carName = carName
      }
}

const suv1 = new SUV("Hyundai")
console.log(suv1)