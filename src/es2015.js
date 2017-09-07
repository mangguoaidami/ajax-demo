window.onload = function(){
    /**
     * Set()实例
     */
    // const s = new Set();
    // [1, 2, 3, 2, 1, 3].forEach(data => s.add(data));
    // for(let i of s){
    //     console.log(i);
    // }

    /**
     * Promise实例
     */
    // function timeout(ms){
    //     return new Promise((resolve, reject)=>{
    //         let text = 'done'
    //         setTimeout(function(){ resolve(text) }, ms);
    //     })
    // }
    // timeout(100).then(data => {
    //     console.log(data);
    // })

    /**
     * promise 回调函数then()会在当前所有同步函数执行完才会执行
     */
    //  let promise = new Promise((resolve, reject) => {
    //      console.log('iam in promise.');
    //      resolve()       //单个执行完成
    //  });
    //  promise.then(function(){
    //      console.log('iam in back fun.')     //所有执行完成
    //  });
    //  console.log('同步.');         //同步执行函数

    /**
     * 参数的解构赋值
     */
    // let array = ["aaa", "32324", "dsad"];

    // (function(array){
    //     for(let i=0; i<array.length; i++){
    //         console.log(array[i])
    //     }
    // })(array);

    /**
     * 参数是否赋值
     */
    // function log(x, y){
    //     y = y || 'world.';
    //     console.log(x, y);
    // }
    // log('hello');
    // log('hello', 'world');
    // log('hello');

}




    /**
     * 多图片预加载
     */
    // var imgs = "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg";
    // var allImgs = [];
    // function addImg(){
    //     for(var i=0; i<500; i++){
    //         allImgs.push(imgs);
    //     };
    // }
    // var span = 20000;
    // addImg();
 
    // function preload(preloadQuene,msec){  
    //      //最大预加载时间
    //      let timeout = new Promise(function(resolve, reject){
    //          window.setTimeout(resolve,msec,"超时");
    //      });
 
    //      let promiseQuene = [];
    //      for(let i = 0;i<preloadQuene.length;i++){
    //          let load = new Promise(function(resolve,reject){
    //              var img = new Image();
    //              img.src = preloadQuene[i];
    //              img.onload = function(){
    //                  console.log("图片载入成功："+this.src);
    //                  img.onload = null;
    //                  resolve(this);
    //              }
    //              img.onerror = function(){
    //                  console.warn("图片载入失败："+this.src);
    //                  resolve("图片载入失败");
    //              }
    //          });
    //          promiseQuene.push(load);
    //      }
    //      return Promise.race([timeout,Promise.all(promiseQuene)]);
    //  }
    //  preload(allImgs,span).then(function(data){  
    //      console.log(data);
    //      for(var i=0; i<data.length; i++){
    //         document.body.appendChild(data[i]);
    //      }
    //  });

    