//click doi anh sp
function changeImage(subImg){
    document.getElementById("main-image").src = "assets/img/product" + subImg + ".jpg";
}


function changeTextSize(str) {
    
    document.getElementById("selected-size").innerHTML = str;
    
    var buttons = document.getElementsByClassName("btn-size");
    
    // bỏ viền đỏ
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.borderColor = '#ddd';
        buttons[i].style.borderWidth = '1px';
    }
    // setup viền đỏ
    var selectedButton = document.getElementById('size-'+str);
    selectedButton.style.borderWidth = '1px';
    selectedButton.style.borderColor = '#af8c72';
}
function changeTextColor(str) {
    document.getElementById("selected-color").innerHTML = str;
    }

    // tăng sl hàng
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity-inp');
    if (parseInt(quantityInput.value) < parseInt(quantityInput.max)) {
        quantityInput.value = (parseInt(quantityInput.value) + 1).toString();
    }
}
// giảm sl
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity-inp');
    if (parseInt(quantityInput.value) > parseInt(quantityInput.min)) {
        quantityInput.value = (parseInt(quantityInput.value) - 1).toString();
    }
}
// tăng shopping cart 
function increaseAmount(id){
    var count=0
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var count = count+ JSON.parse(localStorage[key]).length
    }
    document.getElementById(id).innerHTML ='('+String(count)+')';
}

// tim kiem sp co size vs color = size vs color yeu cau
function existProduct(id) {
    for (var i = 0; i < details.length; i++) {
        if (details[i].id === id) {
            return i;
        }
    }
    return -1; 
}
var details = [];

function addLocalStorage(button, itemName) {
    var parentDiv = $(button).closest('#product-details');
    var price = parentDiv.find(".price").text();
    var name = parentDiv.find(".product-name").text();
    var quantity = parentDiv.find(".quantity #quantity-inp").val();
    var img = document.getElementById("main-image").src;
    var size = parentDiv.find("#selected-size").text();
    var color = parentDiv.find("#selected-color").text();
    var id = name.substring(0,4)+size+color;
    // kiem tra ton tai san pham
    var index = existProduct(id);

    if (index !=-1) {
        // ton tai thi cong sl len
        details[index].quantity = parseInt(details[index].quantity) + parseInt(quantity);
    } else {
        var item = {
            "id": id,
            "name": name,
            "price": price,
            "size": size,
            "color": color,
            "quantity": quantity,
            "img": img
        };
        details.push(item);
    }

    localStorage.setItem(itemName, JSON.stringify(details));
}


