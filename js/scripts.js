$(document).ready(function(){
	if( $(window).width() < 768 ) {
            $('#raghupati').removeClass('show');
        }
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
