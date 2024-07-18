$(document).ready(function() {

    function convertPrice(strPrice) {
        var str = strPrice.trim();
        var res = str.replace('.','').replace('đ', '').replace('.','');
        return res;
    }
    function deleteItem(ID){
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            items= JSON.parse(localStorage[key])
            for(var j=0; j<items.length;j++){
                if(items[j]['id']==ID){
                    var index = items.indexOf(items[j]);
                    items.splice(index,1)
                    break;
                }
            }
        localStorage.setItem(key, JSON.stringify(items));
        }
    }
    function updateTotalPrice() {
        var total = 0;
        var rows = document.querySelectorAll('#cart-table tbody tr');
        
        for (var i = 0; i < rows.length; i++) {
            var price = rows[i].cells[3].textContent;
            var quantity = rows[i].cells[6].textContent; 
            total += parseInt(convertPrice(price)) * parseInt(quantity);
        }
        document.getElementById('total-price').innerHTML = String(total) + 'đ';
    }
    function deleteRow(event) {
        var button = event.target;
        // take the row
        var row = button.closest('tr');
        var id = row.cells[1].textContent;

        // remove row
        row.remove();
        // remove localstore
        deleteItem(id)

        updateTotalPrice();
        updateShippingCart();
    }
    //update shopping cart
    function updateShippingCart(){
        var count=0
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var count = count+ JSON.parse(localStorage[key]).length
        }
        document.getElementById('shopping-cart').innerHTML ='('+String(count)+')';
    }

    function loadProduct(){
        var tbody = document.querySelector('#cart-table tbody');
        var total = 0;
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            items= JSON.parse(localStorage[key])
            // alert(i)
            // alert(localStorage.length)

            for(var j=0; j<items.length;j++){

                var newRow = document.createElement('tr');
                
                // add item
                var productCell = document.createElement('td');
                var productImage = document.createElement('img');
                productImage.src = items[j]["img"];
                productImage.style='max-width:100px';
                productCell.appendChild(productImage);
                newRow.appendChild(productCell);
                
                var idCell = document.createElement('td');
                idCell.textContent = items[j]["id"];
                newRow.appendChild(idCell);

                var infoCell = document.createElement('td');
                infoCell.textContent = items[j]["name"];
                newRow.appendChild(infoCell);

                var priceCell = document.createElement('td');
                priceCell.textContent =  items[j]["price"];
                newRow.appendChild(priceCell);

                var colorCell = document.createElement('td');
                colorCell.textContent =  items[j]["color"];
                newRow.appendChild(colorCell);
                
                var sizeCell = document.createElement('td');
                sizeCell.textContent = items[j]["size"];
                newRow.appendChild(sizeCell);
                

                var amountCell = document.createElement('td');
                amountCell.textContent = items[j]["quantity"];
                newRow.appendChild(amountCell);
                
                var deleteCell = document.createElement('td');
                var deleteButton = document.createElement('button');
                deleteButton.textContent = '🗑️';
                deleteButton.style ='border: 0px; background-color:white ;'
                deleteButton.addEventListener('click', deleteRow); 

                deleteCell.appendChild(deleteButton);
                newRow.appendChild(deleteCell);
                
                // add new row to table
                tbody.appendChild(newRow);
                total = total+ parseInt(convertPrice(items[j]["price"]))*parseInt( items[j]["quantity"])
            }
        }
        document.getElementById('total-price').innerHTML=String(total)+'đ'
    }
    loadProduct();
})
