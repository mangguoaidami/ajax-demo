
/**
 * 这是一个通过引入（https://github.com/fdaciuk/ajax.git）ajax库的案例
 */
var ajax = require('@fdaciuk/ajax');

var request = ajax({
        method: 'get',
        url: 'https://reqres.in'+'/api/users/2',
        data: null
    })


var btn = document.getElementById('btn');

window.onload = function(){
    btn.addEventListener('click', function(e){
        var data = request.then
        console.log(data);
    }, false)
}