const delay = ms =>{
    return new Promise(r => setTimeout(() => r (), ms))
}
const url = 'https://jsonplaceholder.typicode.com/todos'

//function fetchTodos() {
//    console.log ('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(responce => responce.json())
//            }
//fetchTodos()
//    .then(data => {
//       console.log('Data:',data)
//        })
//.catch(e => console.error(e))

async function fetchAsyncTodos () {
    console.log('Fetch to do started...')
    try {
        await delay(2000)
        const responce = await fetch(url)
        const data = await responce.json()
        console.log('Data', data)
    } catch (e) {
    }finally {
        }
}
    fetchAsyncTodos()
///Оператор await заставляет функцию, объявленную с использованием оператора async, ждать выполнения Promise и продолжать выполнение после возвращения Promise значения.
///Впоследствии возвращает полученное из  Promise значение.
///Если типом значения, к которому был применён оператор await, является не Promise, то значение приводится к успешно выполненному Promise.
///Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch.
///Что бы функция async await работала необходимо в родительской функции доавить префикс async