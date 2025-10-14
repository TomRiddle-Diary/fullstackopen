// const triple = function(x) {
//     return x * 3
// }

// const waffle = triple
// console.log( waffle(30));

// let animals = [
//     { name: 'Fluffykins', species: 'rabbit'},
//     { name: 'Caro', species: 'dog'},
//     { name: 'Hamilton', species: 'dog'},
//     { name: 'Harold', species: 'fish'},
//     { name: 'Ursula', species: 'cat'},
//     { name: 'Jimmy', species: 'fish'}
// ]

// // let names = animals.map(function(animal) { return animal.name })
// let names = animals.map((animal) => animal.name )

// let names = []
// for (let i = 0; i < animals.length; i++) {
//     names.push(animals[i].name)
// }

// console.log(names);




// let isDog = (animal) => {
//     return animal.species === 'dogs'
// }

// let dogs = animals.filter(isDog)

// let otherAnimals = animals.reject(isDog)

// console.log(dogs);
// console.log(otherAnimals)

// let dogs = []
// for (var i=0; i < animals.length; i++) {
//     if (animals[i].species === 'dog')
//         dogs.push(animals[i])
// }
// console.log(dogs);

let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

let totalAmount = orders.reduce(sum, order => sum += order.amount )
// let totalAmount = 0
// for (var i=0; i < orders.length; i++) {
//     totalAmount += orders[i].amount
// }
console.log(totalAmount);
