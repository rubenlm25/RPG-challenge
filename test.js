var flag = true;
function foo(){
    if (flag){
        
        setTimeout(foo, 100);
    }
}

function stop(){
    flag = false;
}