const subTotal = 19.75;
const taxRate = 0.07;

function calculateTax(subtotal, taxRate) {
	return subtotal * taxRate;
}

const localTax = calculateTax(subTotal, taxRate);

function calculateTotal(subtotal, localTax) {
	return subtotal + localTax;
}

const printTotal = calculateTotal(subTotal, localTax);

console.log('\nSubtotal: \t $', subTotal);
console.log('Sales Tax: \t $', localTax.toFixed(2));
console.log('------------------------');
console.log('TOTAL: \t\t $', printTotal.toFixed(2));
