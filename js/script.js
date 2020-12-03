let amountInput = document.querySelector('.input__amount')
let fromInput = document.querySelector('.input__from')
let toInput = document.querySelector('.input__to')

let outOne = document.querySelector('.out__one')
let outAllFrom = document.querySelector('.out__all__from')
let outAllto = document.querySelector('.out__all__to')

amountInput.addEventListener('input', start)
fromInput.addEventListener('input', start)
toInput.addEventListener('input', start)


function start() {
    fetch(`https://api.exchangeratesapi.io/latest?base=${fromInput.value}`)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            outInfo(data)
        })
}

function outInfo(data) {
    let amountСurrency = (data.rates[toInput.value]).toFixed(2)

    outOne.textContent = `1 ${fromInput.value} = ${amountСurrency} ${toInput.value}`

    outAllFrom.textContent = `${amountInput.value} ${fromInput.value} = `
    outAllto.textContent = `${(amountСurrency * amountInput.value).toFixed(2)} ${toInput.value}`
}

// ===================================================================================