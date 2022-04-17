// let white = document.getElementById("white")
// let blue = document.getElementById("blue")
// let violet = document.getElementById("violet")
// let black = document.getElementById("black")


// white.addEventListener("click", function(){
//     document.body.style.backgroundColor = "white";
// })

// blue.addEventListener("click", function(){
//     document.body.style.backgroundColor = "cyan";
// })

// violet.addEventListener("click", function(){
//     document.body.style.backgroundColor = "springgreen";
// })

// black.addEventListener("click", function(){
//     document.body.style.backgroundColor = "black";
//     document.getElementsByTagName("p")[0].style.color = "white"
//     document.getElementsByTagName("h1")[0].style.color = "white"
// })


let p = document.getElementById("p")
let h = document.getElementById("h")


function changeColor(color, textColor) {
    document.body.style.backgroundColor = color;
    p.style.color = textColor;
    h.style.color = textColor;
}
