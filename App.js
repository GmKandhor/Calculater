let display = document.querySelector(".display")
let btns = document.querySelectorAll(".btn")
let operaters = document.querySelectorAll('.operater')
let equal = document.querySelector(".equal")
let de = document.querySelector(".DE-operater")
let clear = document.querySelector(".AC")

btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        console.log("clicked");
        display.value += btn.value
    })
})
equal.addEventListener("click", ()=>{
    display.value = eval(display.value)
    // console.log("ji");
})

de.addEventListener("click", ()=>{
    // console.log("d");
    display.value =  display.value.toString().slice(0,-1)
})
clear.addEventListener("click", ()=>{
    // console.log("d");
    display.value =  "";
})