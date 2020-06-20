$(document).ready(function(){
    $(window).resize(function() {
        if( $(this).width() < 768 ) {
            $('#raghupati').removeClass('show');
        }
        else {
            if(!$('#raghupati').hasClass('show')){
                $('#raghupati').addClass('show');
            }
        }
    });
});
