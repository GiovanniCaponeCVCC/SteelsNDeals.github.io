function Calculate() {
    //The input from the user for price of the car
    const amount = document.querySelector("#amount").value;
    //The input from the user for interest rate
    const rate = document.querySelector("#rate").value;
    //The input from the user that they choose over how many months they want to pay for
    const months = document.querySelector("#months").value;
    //calculates the interest total
    const interest = (amount * (rate * 0.01)) / months;
    //calculates the total cost per month
    const total = ((amount / months) + interest).toFixed(2);
    //returns the total back to the page and displays it
    document.querySelector("#total").innerHTML = "$" + total + " per month";
}  