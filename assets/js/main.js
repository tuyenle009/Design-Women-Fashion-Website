$(document).ready(function() {
    function increaseAmount(id){
        var count=0
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var count = count+ JSON.parse(localStorage[key]).length
        }
        document.getElementById(id).innerHTML ='('+String(count)+')';
    }
    increaseAmount('shopping-cart')
})
