$(document).ready(function() {
    var n = 5;
    var current = 1;
    
    function slideShow() {
        if (current < n)
            current += 1;
        else
            current = 1;
        document.getElementById("bannerImage").src = "assets/img/banner" + current + ".jpeg";
    }

    function autoPlay() {
        setInterval(slideShow, 4000);
    }
    
    function slideShow2(current) {
        document.getElementById("bannerImage").src = "assets/img/banner" + current + ".jpeg";
    }

    function nextSlide() {
        if (current < n) 
            current += 1;
        else 
            current = 1;
        slideShow2(current)
    }

    function prevSlide() {
        if (current > 1) 
            current -= 1;
        else 
            current = n;
        slideShow2(current)
    }

    $('#prevButton').click(prevSlide);
    $('#nextButton').click(nextSlide);

    autoPlay();
});