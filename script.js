$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        console.log("ttt");
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            console.log("hhhh");
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
                
                $(this).animate({'opacity':'1'},500);

        }); 
    });
});