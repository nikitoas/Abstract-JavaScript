function hello() {
console.log('Hello',this)//Прототип всегда вызывает слово в консоле слева от ключевого слова THIS
}

const person = {
    name: 'Mikita',
    age : 29,
    sayHello : hello,
    sayHelloWindow: hello.bind(document),
    logInfo:function (job, phone) {
        console.group(`${this.name}info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
        }
}

const lena =  {
    name:'Elena',
    age:25
}
//person.logInfo.bind(lena, 'Frontend','8-999-1234-23456')()
//person.logInfo.call(lena,'Frontend', '8-999-1234-23456')
person.logInfo.apply(lena,['Frontend', '8-999-1234-23456'])

//// ===================

const array = [1,2,3,5,6,8,9]
Array.prototype.multBy = function (n) {
return this.map(function (i) {
    return i * n
 })
}

console.log(array.multBy(20))