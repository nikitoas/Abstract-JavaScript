//Как мы знаем из главы Сборка мусора, движок JavaScript хранит значения в памяти до тех пор, пока они достижимы (то есть, эти значения могут быть использованы).
// Обычно свойства объекта, элементы массива или другой структуры данных считаются достижимыми и сохраняются в памяти до тех пор, пока эта структура данных содержится в памяти.
// Например, если мы поместим объект в массив, то до тех пор, пока массив существует, объект также будет существовать в памяти, несмотря на то, что других ссылок на него нет.
//WeakMap не поддерживает перебор и методы keys(), values(), entries(), так что нет способа взять все ключи или значения из неё.
//В WeakMap присутствуют только следующие методы:
//weakMap.get(key)
//weakMap.set(key, value)
//weakMap.delete(key)
//weakMap.has(key)
//let obj = {name:'weakmap'}
//const arr = [obj]
//
//obj = null
//
//console.log(arr[0])

//const map = new WeakMap ([
//    [obj, 'obj data']
//])
//get set delete has

//obj = null
///==========

const cache = new WeakMap
function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user,Date.now())
    }
    return cache.get(user)
}

let lena = {name:'Elena'}
let alex = {name:'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena))
console.log(cache.has(alex))

///////////==========================
//Коллекция WeakSet ведёт себя похоже:
//Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
//Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
//Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.
//Будучи «слабой» версией оригинальной структуры данных, она тоже служит в качестве дополнительного хранилища.
//Но не для произвольных данных, а скорее для значений типа «да/нет». Присутствие во множестве WeakSet может что-то сказать нам об объекте.

const users = [
    {name:'Elena'},
    {name:'Alex'},
    {name:'Irina'},
]
const visits = new WeakSet()
visits.add(users[0]).add(users[1])
users.splice(1,1)
console.log(visits.has(users[0]))
console.log(visits.has(users[1]))