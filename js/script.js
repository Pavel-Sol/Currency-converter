// ==================================================================
let btn = document.querySelector('#btn')

btn.addEventListener('click', start)

function start() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then((data) => {
            // console.log(data.text())
            return data.json()
        })
        .then((data) => {
            console.log(data.rates.RUB)
            console.log(data)
        })
}
// ===================================================================================