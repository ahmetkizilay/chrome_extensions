$('script[src*="google"]').each(function(){
    $(this).next().hide();
});