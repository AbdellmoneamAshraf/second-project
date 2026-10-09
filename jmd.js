//Build a JavaScript program that calculates the total cost of an order, applies a membership discount, and determines the shipping fee. Display the order details in the browser console.
//Required Data
//- Product name.
//- Unit price.
//- Quantity.
//- Membership status: true or false.
//Requirements
//1. Store the order data using let and const.
//2. Calculate the subtotal: unit price × quantity.
//3. Apply a 10% discount if the customer is a member and the subtotal is 1,000 EGP or more.
//4. Add a 50 EGP shipping fee if the total after the discount is below 500 EGP. Otherwise, shipping is free.
//5. Calculate the final total.
//6. Use template literals to display the order details.
//7. If the price or quantity is zero or negative, display Invalid order instead of calculating the order.
const Product = "market";
const unitprice = 3000;
const Quantity = 5;
const ismember = true;
let discount = 0;
let shipping = 0;

if (unitprice <= 0 || Quantity <= 0) {
    console.log("Invalid order");
} else {
    const subtotal = unitprice * Quantity;

    if (ismember && subtotal >= 1000) {
        discount = subtotal * 0.10;
    }
    const totalAfterDiscount = subtotal - discount;

    if (totalAfterDiscount < 500) {
        shipping = 50;
    } else {
        shipping = 0;
    }
    const finalTotal = totalAfterDiscount + shipping;
    console.log(`
     Product: ${Product}
     Unit Price: ${unitprice} EGP
     Quantity: ${Quantity}
     Member: ${ismember}
     Subtotal: ${subtotal} EGP
     Discount: ${discount} EGP
     Shipping: ${shipping} EGP
     Final Total: ${finalTotal} EGP
`);
}
