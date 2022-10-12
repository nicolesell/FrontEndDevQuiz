
// phone formatter function
$(document).ready(function(){
   var phone = [{ "mask": "(###) ###-####"}];
    $('#phone').inputmask({ 
        mask: phone, 
        definitions: { '#': { validator: "[0-9]"}} });
});