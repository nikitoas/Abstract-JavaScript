//function creatCalcFunction(n) {
//   return function () {
//        console.log(1000 * n)
//    }
//}
//const calc = creatCalcFunction(42)
    //calc()
///параметр n замкнулся и  передался в последующую функцию

//function createIncrementor(n) {
//    return function (num) {
//    return n + num
//    }
//}
//const addOne = createIncrementor(1)
//const addTen = createIncrementor(10)
//console.log(addOne(10))
//console.log(addOne(41))

//console.log(addTen(10))
//console.log(addTen(41))
 function urlGenerator(domain) {
    return function (url) {
      return `htttps://${url}.${domain}`
    }
 }

const comUrl = urlGenerator(`com`)
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('soccer'))
console.log(ruUrl('vk'))