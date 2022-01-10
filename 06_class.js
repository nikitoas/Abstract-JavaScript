//const animal = {
//    name:'Animal',
//    age:5,
//    hasTail:true
//}

class Animal{
    static type = 'ANIMAL'
    constructor(options) {
    super()
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
    }
    voice(){
        console.log('I am animal!')
    }

}

//const animal = new Animal({
//    name:'Animal',
//    age:5,
//    hasTail:true
//})

class Cat extends Animal{
    static type = 'CAT'

  constructor(options) {
      super(options)
      this.color = options.color
        }

        voice() {
        console.log('I am cat!')
        }
    }

    const cat = new Cat({
       name:cat,
       age:7,
       hasTail:true,
       color:'black'
    })
