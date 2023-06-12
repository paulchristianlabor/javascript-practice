document.getElementsByTagName("html")[0].style.height = "100%"
document.getElementsByTagName("body")[0].style.height = "100%"
document.getElementsByTagName("body")[0].style.display = "flex"
document.getElementsByTagName("body")[0].style.justifyContent = "center"
document.getElementsByTagName("body")[0].style.alignItems = "center"
document.getElementsByTagName("body")[0].style.backgroundColor = "black"
document.getElementsByTagName("body")[0].style.color = "white"

const clock = document.createElement("div")
clock.style.fontSize = "100px"

setInterval(function(){
    clock.textContent = new Date().toLocaleTimeString()
})
    
document.getElementsByTagName('body')[0].appendChild(clock)