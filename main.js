var customerOrder;
document.getElementById("submitOrder").addEventListener("click", function(){
    customerOrder = document.getElementById("order").value;
    document.getElementById("order").value = "";
    console.log(customerOrder);
    var orderItems = customerOrder.split(",");
    for (var i = 0; i < orderItems.length; i++) {
        orderItems[i] = orderItems[i].trim();
    }
    var len = orderItems.length
    var orders = new Array(len);
    for(var j=0; j<len; j++) {
        var arr = orderItems[j].split(":");
        orders[j] = arr[1].trim();
    }
    for(var i in orders){
        if(menu[orders[i]]){
            if(menu[orders[i]]>0){
                menu[orders[i]] -= 1;
            } else {
                alert(menu[orders[i]]+"out of stock");
            }
        } else {
            alert(orders[i]+" not available");
        }
    }
});
var menu = {
    "french fries": 30,
    "shake": 35,
    "burger": 30,
    "hotdog": 30,
    "soda": 30,
    "wings": 30
};
console.log(menu["shake"]);