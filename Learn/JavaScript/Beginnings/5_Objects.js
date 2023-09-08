// 1.Intro

const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clemente', 'Antoine'],
    'founders to be': ['Saba'],
    domain: 'algoexpert.io',
  };
  
  console.log(website);

// 2. Getting object value
console.log(website.name);
console.log(website['founders to be'])

// 3. Editing Object Values
website.name = "FDE";
console.log(website.name);
// delete
delete website.domain
console.log(website);

// this
function College(name, state, country){
  this.name = name;
  this.state = state;
  this.country =  country;
}

const college1 =  new College('UTA', 'TX','USA')
const college2 =  new College('Jain', 'BGM','INDIA')

console.log(college1)

// SYMBOL
const id = Symbol('id')
const obj = {
  [id]: 1234,
  id:'hello',
  id: 'world'
}

console.log(obj)

// Does object contains key
console.log('name' in website);
console.log(website.hasOwnProperty('name'));

console.log('toString' in website);
// In also includes the inherited properties
console.log(website.hasOwnProperty('toString'));

// Function in an object
const website01 = {
  name: 'AlgoExpert',
  rating: 5,
  founders: ['Clement'],
  sayHello: () => console.log("From Hello Function"),
  anotherSayHello(){
    console.log("Another function call");
  }
}

website01.sayHello();
website01.anotherSayHello();