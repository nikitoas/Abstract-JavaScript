const person = Object.create(///по умолчанию обьект находиться в форме false
    {
       calculateAge(){
           console.log('Age',new Date().getFullYear()-this.birthyear)
       }
    },
    {
    name : {
    value: 'Mikita',
    enumerable: true,///
    writable:true,///дескриптер Promise находиться по умолчанию false
    configurable: true///дескриптер Promise находиться по умолчанию false
    },
    birthyear:{
    value: 1993,
    enumerable: false,///
    writable: false,///
    configurable:false///параметр дает возможность удалять какой-либо параметр
        },
    age: {
    get() {
        return new Date ().getFullYear() - this.birthyear
    },
    set(value){
        document.body.style.background = 'red'
        console.log('Set age',value)
            }
         }
    }
)
///person.name = 'Maxim'///

for (let key in person){
    if (person.hasOwnProperty(key)){
        console.log('key',key,person[key])
    }
}