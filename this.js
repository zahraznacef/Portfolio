document.getElementsByClassName("change")[0].onclick = function(){
    document.getElementsByTagName("ul")[0].style.justifyContent = "space-evenly";
}
document.getElementsByClassName("change1")[0].onclick = function(){
    document.getElementsByTagName("ul")[0].style.justifyContent = "space-between";
}
document.getElementsByClassName("reset")[0].onclick = function(){
    document.getElementsByTagName("ul")[0].style.justifyContent = "space-around";
}