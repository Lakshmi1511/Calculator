function displayData(n){
    result.value+=n
}
function Allclear(){
    result.value=""
}
function evalExprsn(){
    // n=result.value
    // out=eval(n)
    // result.value=out
    result.value=eval(result.value)
}
function backSpace(){
    s=result.value
    result.value=s.slice(0,-1)
}