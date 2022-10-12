
$(document).ready(function(){
    
    //phone format with inputmask
   var phone = [{ "mask": "(###) ###-####"}];
    $('#phone').inputmask({ 
        mask: phone, 
        definitions: { '#': { validator: "[0-9]"}} });

    // 
    $( "form" ).submit(function( event ) {
        console.log($(this).serializeArray() );
        });
});

