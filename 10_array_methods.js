const people =[
    {name:'Владилен',age:25,budget:4000},
    {name:'Елена',age:17,budget:3400},
    {name:'Игорь',age:49,budget:5000},
    {name:'Михаил',age:15,budget:1800},
    {name:'Василиса',age:24,budget:2500},
    {name:'Виктория',age:48,budget:2300},
]
/////METHOD FOR//////
//for (let i=0; i< people.length; i++) {////EСMAS5
//    console.log(people[i])
//}

//for (let person of people) {////EСMAS6
//    console.log(person)
//}

//////METHOD forEACH////////
///Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
// // Он для каждого элемента массива вызывает функцию callback.
// // Этой функции он передаёт три параметра callback(item, i, arr):

//people.forEach(function (person) {
//    console.log(person)
//})
//people.forEach(person => console.log(person))

//////METHOD Map//////Можно преобразовывать массивы или получать определенные данные
///Метод «arr.map(callback[, thisArg])» используется для трансформации массива.
/// Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.

//const newPeople = people.map(person => {
// return(people)
//})
//console.log(people)
//const newPeople = people.map(person => person.age *3)
//console.log(newPeople)

/////METHOD Filter/////
//Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
//Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.

//const adults = people.filter(person => person.age >= 18)
// console.log(adults)

////METHOD Reduce////
//Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
//Метод reduce используется для вычисления на основе массива какого-либо единого значения, иначе говорят «для свёртки массива».
//Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.
//Аргументы функции callback(previousValue, currentItem, index, arr)

//const amount = people.reduce((total,person) => total + person.budget,0)
//console.log(amount)

/////METHOD Find/////
///для поска определенных обьектов////

//const personAge = people.find(person => person.age === 17)
//console.log(personAge)

////METHOD FindIndex
// const igorIndex = people.findIndex(person => person.name ==='Игорь')
// console.log(igorIndex)

