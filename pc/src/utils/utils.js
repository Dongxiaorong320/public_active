function getCookie(target){
    var value;
    document.cookie.split('; ').forEach((item,index)=>{
        let _key = item.split('=');
        if(_key[0] == target){
            value = _key[1]
        }
    })
    return value
}

function setCookie(a,b){
    // if(Object.prototype.toString.call(arr) == '[object array]'){
        if(!a || !b) return;
        document.cookie = a + '=' + b
    // }else{
        // console.error('入参必须是数组')
    // }
    
}

function delCookie(name){
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = getCookie(name)
    if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
}

export {
    getCookie,
    setCookie,
    delCookie
}