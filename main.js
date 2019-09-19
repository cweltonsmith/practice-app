function calculations() {
    
    //Passes string and returns float
    const total = parseFloat(document.querySelector('#total-field').value)
    const tipRate = parseFloat(document.querySelector('#rate-field').value)

    //Doing all the simple calculations
    const tip = total * (tipRate/100)
    const taxRate = 5.5
    const tax = total * (taxRate/100)
    const grandTotal = total + tip + tax

    //Modifying HTML page with the calculations output
    document.querySelector('#tip-amount').innerHTML = `$${tip.toFixed(2)}`
    document.querySelector('#tax-amount').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#total-amount').innerHTML = `$${grandTotal.toFixed(2)}`
}


//On click perform the calculation function
document.querySelector('#calculate').addEventListener('click', calculations)