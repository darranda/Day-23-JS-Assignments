// Create a variable that holds the total amount of the bill (before the tip).

let totalBill = 100;

 // Create a function named 'calculateTip' ( It should multiply the bill variable by 20% of the total and return that value)

 function calculateTip (x,totalBill) {
    return x * totalBill;
 }
calculateTip (.2,totalBill);
console.log(calculateTip(.2,totalBill))
// 20

// Create another function called 'getBillTotal' and it should do the following things
// - Take any amount as an argument
// - call the 'calculateTip' function
// - return the amount + the tip amount


function getBillTotal(amount) {
    return calculateTip + totalBill;
}
    let tip = calculateTip(.2, totalBill); 

    console.log(tip + totalBill)
// 120
