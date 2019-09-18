const calculateGrandTotal = (vartotal, vartip, vartax) => {
    return vartotal + vartip + vartax
}

const calculateTip = (vartotal, vartiprate) => {
    return vartotal * (vartiprate/100)
}

const calculateTax = (vartotal, vartaxRate) => {
    return vartotal * (vartaxRate/100)
}


document.querySelector('#calculate').addEventListener('click', () => {

    const total = parseFloat(document.querySelector('#total-field').value)
    const tipRate = parseFloat(document.querySelector('#rate-field').value)

    const tip = calculateTip(total, tipRate)
    const taxRate = 5.5
    const tax = calculateTax(total, taxRate)
    const grandTotal = calculateGrandTotal(total, tip, vartax)

    document.querySelector('#tip-amount').value = tip
    document.querySelector('#tax-amount').value = tax
    document.querySelector('#grand-total').value = grandTotal
})