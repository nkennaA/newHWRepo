var customerOrder;
document.getElementById("submitOrder").addEventListener("click", function(){
    customerOrder = document.getElementById("order").value;
    document.getElementById("order").value = "";
    console.log(customerOrder);
});