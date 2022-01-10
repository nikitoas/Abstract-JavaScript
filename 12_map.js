////Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
//// Методы и свойства:
// // new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

const obj = {
    name:'Vladilen',
    age:'26',
    job: 'fulstack'
}

let entries;
entries = [
    ['name', 'Vladilen'],
    ['age', 26],
    ['job', 'fulstack']
]
    //console.log(Object.entries(obj))
    //console.log(Object.fromEntries(entries))

    const map = new Map(entries)
    //console.log(map.get('job'))
    map
    .set('newField', 42)
    .set('obj', 'value of object')
    .set(NaN, 'Nan ???');
//console.log(map.get(NaN))
//map.delete('job')
//console.log(map.has('job'))
//map.clear()
//console.log(map)

//for ( let [key,value] of map.entries()){
//    console.log(key,value)
//}

//for (let val of map.values()) {
//  console.log(val)
//}

//for (let key of map.keys()) {
//    console.log(key)
//}

//map.forEach((val,key,m) => {
//    console.log(val,key)
//})

//const  array = Array(map)
//console.log(array)

const users = [
    {name:'Elena'},
    {name:'Alex'},
    {name:'Irina'},
    ]
const visits = new Map()

visits
.set(users[0],new Date())
.set(users[1],new Date(new Date().getTime() +1000 * 60))
.set(users[2],new Date(new Date().getTime() +5000 * 60))

function lastVisits(user) {
    return visits.get(user)
}
console.log(lastVisits((users[0])))