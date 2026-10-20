const checkout = prompt("Enter a price in $USD:");
const price = Number(checkout.replace("$", ""));
const newPrice = price * 0.9;
console.log(`Your new price is: ${newPrice}`)



