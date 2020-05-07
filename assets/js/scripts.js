$(function(){

    //Scroll 

    $("a").click(function(event){
        if(this.hash !== "") {
            event.preventDefault();

            var algo = this.hash;

            $("html, body").animate({
                scrollTop: $(algo).offset().top
            },800, function(){
                window.location.hash = algo;
            });
        }
    });

    //tooltips experience
    $('[data-toggle="tooltip"]').tooltip()

    //popovers
    $('[data-toggle="popover"]').popover()

});