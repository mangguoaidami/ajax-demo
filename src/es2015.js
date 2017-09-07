window.onload = function(){
    /**
     * 对于一个数组，，使其返回值没有重复
     */
    const s = new Set();
    [1, 2, 3, 2, 1, 3].forEach(data => s.add(data));
    for(let i of s){
        console.log(i);
    }
}