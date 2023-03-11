//console.log("Hello");//for print your codes in console

const myLuckyNumber = 20;

let quote = 'he said "hello"';

let scream = "    SHUT UP    "
let whisper = scream.trim().toLowerCase();//trim is used to cut unnecessary extra space at the beginning and end

let thing = 53
let smt = "there are ${thing} bird in there";

const word = "bread"
let word2 = word.slice(1).replace('d','l');//this will slice the word from 1 and then replace d with l

"Toys".indexOf('T')//0 is the place of o
"Toys".indexOf('A')//-1 there is no A

let lottoNumbers = [12,13,15,45,65,78]; //defining an array

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']
leaderboard[1]='Luna'
leaderboard[3]='Draco';
//this will change harry with luna and hermione with draco

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']
planets.shift()//remove the first element of the array
planets.push('Saturn')//add an element to the end of an array
planets.unshift('Mercury');//add an element to start of an array 

let cats = ['cat1', 'cat2']
let dogs = ['dog1', 'dog2']
cats.concat(dogs);//will merge cats with dogs
cats.includes('Cat1');//false because we have cats not Cats.
party = cats.concat(dogs);
party.indexOf('cat1')//0
party.reverse()//will reverse the original party list
party.indexOf('cat1')//3

let numnum = [12,13,15,45,65,78,68,69,77,44]; 
numnum.slice(3)//start from third index in array
numnum.slice(3,5)//start from third end in 4
numnum.slice(-3)//last three index

let example = numnum
example.splice(1,0,'new')//add new before 1 delete 0 index from 1 to 0 length

const board = 
[ ['X','O','X'],
  ['O','X','O'],
  ['X','O','O'] ]

let human = {
    name: 'Jack',
    surname: 'Sparrow',
    heigh: 178,
    weight: 65,
    isDead: false,
    nicknames: ['stupid', 'idk', 'null1']
}

human["name"];//access to varible valled name
human.name;//access to varible called name

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress=restaurant.address + " Brooklyn, NY 11206"

for (let i = 1; i<=10; i++){
    //console.log(i);
}//how to make a for loop in js

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for(let i = 0; i<people.length; i++){
    //console.log(people[i].toUpperCase())
}

let seatingChart = [
    ['jack','alfred','thomas','muller']
    ['antonio','geffry','tom','dio']
    ['liam','chris','mike']
]
for(let i = 0; i<seatingChart.length; i++){
    console.log()
}
