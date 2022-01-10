//Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
// Его основные методы это:
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

const set = new Set([1,2,3,3,3,4,5,5,6])
set.add(10).add(20.).add(30).add(20)
//console.log(set)
//console.log(set.has(42))
//console.log(set.size)
//console.log(set.delete(1))
//console.log(set.size)
//console.log(set.clear())
//console.log(set.size)

//console.log(set.entries())//дает возможность из SET делать MAP
//for (let key of set) {
//    console.log (key)
//}
///=============

function uniqValues(array) {
    return Array.from(new Set(array))
}
    console.log(uniqValues([1,1,2,2,4,4,4,4,4,4,5,6,6,6]))

