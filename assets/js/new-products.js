
$(document).ready(function() {

    $('.toggle-icon').click(function() {
        // tìm dropdown 
        // toggle hiển thị 
        $(this).parent().find('.dropdown-menu').toggle();

        if ($(this).hasClass('inactive')) {
            $(this).removeClass('inactive').addClass('active');
        } else {
            $(this).removeClass('active').addClass('inactive');
        }
        
        if ($(this).hasClass('active')) {
            $(this).text('–');
        } else {
            $(this).text('+');
        }
    });
});
