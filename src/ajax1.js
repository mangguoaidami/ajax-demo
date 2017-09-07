/**
 * 
 * 这是一个使用原生js(es2015)的ajax请求案例
 */
var getData = function(url) {
    var promise = new Promise(function(resolve, reject){
      var client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
      function handler() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
    });
  
    return promise;
  };
  

window.onload = function(){
    btn.addEventListener('click', function(e){
        getData("https://reqres.in/api/users/2").then(function(json) {
            console.log(json);
          }, function(error) {
            console.error('出错了', error);
          });
    }, false)
}