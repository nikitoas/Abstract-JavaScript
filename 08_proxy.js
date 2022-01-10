///Объект Proxy «оборачивается» вокруг другого объекта и может перехватывать (и, при желании, самостоятельно обрабатывать) разные действия с ним,
///,например чтение/запись свойств и другие.
/// Прокси используются во многих библиотеках и некоторых браузерных фреймворках.
/////Object/////
 const person = {
    name: 'Mikita',
    age:29,
    job:'beginnerProgrammer'
}
const op = new Proxy(person,{
    get (tarrget, pop){
        console.log( 'Getting prop ${prop}')
    },
  set(target,pop,value){
     if (prop in target ) {
         target[prop] = value
     } else {
        throw new Error('No ${prop}field in target')
     }
 },
    has(target, prop) {
        return['age','name','job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
    }
})
/////Function/////
const log = text => `Log: ${text}`
const fp = new Proxy(log, {
    apply(target, thisArg, args){
      console.log('Calling fn ...')
        return target.apply(thisArg, args).toUpperCase()
    }
    })

////Classes///
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}
const PersonProxy = new Proxy(Person, {
    construct(target, args) {
    console.log('Construct...')
    return new Proxy(new target(... args),{
    get (t, prop) {
    console.log(`Getting prop "${prop}"`)
    return t [prop]
            }
        })
    }
 })
 const p = new PersonProxy ('Valera', 37)