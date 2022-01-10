console.log('Start')////-синхронная функция
console.log('Start 2')
//setTimeout()-асинхронная функция которой нет в JS она пришла из WEB

window.setTimeout(function () {
console.log('Inside timeout,after 2000 seconds')

},2000)

window.setTimeout(function () {
    console.log('Hello World,after 3000 seconds')

},3000)////ЕСЛИ ПОСТАВИТЬ setTimeout СО ЗНАЧЕНИЕМ 0 ТО ОН ВСЕ РАВНО БУДЕТ ASYNC И ПОСЛЕДНИЙ В ОЧЕРЕДИ В СALLSTACK

window.setTimeout(function () {
    alert('Hello World,after 3000 seconds')

},3000)


console.log('END')

////EVENT LOUPE возможность внедрять в код много асинхронности,не блокируя синхронные функции.
/// синхронные функии имееют приоретет перед асинхронными функциями

