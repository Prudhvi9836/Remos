function updateTotal() {
    const productSelect = document.getElementById("productSelect");
    const quantityInput = document.getElementById("quantityInput");
    const totalAmount = document.getElementById("totalAmount");
    const selectedProductPrice = parseInt(productSelect.value);
    const quantity = parseInt(quantityInput.value);
    var total = selectedProductPrice * quantity;
    total = total>1000?total-(total/10):total
    totalAmount.innerHTML = `Total Amount: $${total}`;
}

function calculateTotal() {
    updateTotal();
}