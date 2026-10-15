const coupon = prompt("Enter coupon code:");
const price = 100;
if (coupon === "SAVE10") {console.log("10% OFF");


const discount = price * 0.9;
console.log(`New price: ${discount}`);
}

else {
    console.log(`Price: ${price}`);
}


