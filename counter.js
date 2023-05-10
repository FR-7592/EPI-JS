
function increment(){
   document.getElementById("count").innerHTML++;
}
function decrement(){
    document.getElementById("count").innerHTML--;
}

document.getElementById("plus").addEventListener("click", increment);
document.getElementById("minus").addEventListener("click", decrement);
