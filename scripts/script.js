$(function(){
    var $button06 = $('#bus06');
    $button06.on('click', function(){
        var req = new XMLHttpRequest();
        req.onload = function(){
            if(req.status===200){
                $('#times06').html(req.responseText);
            }
        }
    req.open('GET', 'data/times-bus.html', true);
    req.send(null);
    });


})