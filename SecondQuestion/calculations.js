function updateTotal() {
    const productCheckboxes = document.getElementsByName("product");
    const quantityInputs = document.getElementsByName("quantity");
    const totalAmount = document.getElementById("totalAmount");
    let total = 0;

    for (let i = 0; i < productCheckboxes.length; i++) {
        if (productCheckboxes[i].checked) {
            const selectedProductPrice = parseInt(productCheckboxes[i].value);
            const quantity = parseInt(quantityInputs[i].value);
            total += selectedProductPrice * quantity;
        }
    }
    if(total<=1000){
        totalAmount.innerHTML = `Total Amount: $${total}`;
    }
    else{
        totalAmount.innerHTML = `Discounted Total Amount $${total-(total/10)}`;
    }
}

function calculateTotal() {
    // For demonstration purposes, this function is triggered by the "Calculate Total" button,
    // but you can use it to submit the form to a server and perform calculations there.
    // You can use JavaScript fetch or AJAX to send data to the server and get the total amount in response.
    // Here, we will simply call the updateTotal() function to calculate the total and display it.

    updateTotal();
}