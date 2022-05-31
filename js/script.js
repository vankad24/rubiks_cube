function hi(){
    alert("hi")
}

main_height = document.getElementsByClassName("main-div")[0]
fog = document.getElementById("fog")
tog = document.getElementById("toggle")
// fog.height = main_height

tog.addEventListener("click",()=> fog.classList.toggle('show') )
fog.onclick = ()=>tog.click()

function test(ev){
    // el = document.getElementById("test")
    // el.innerText = Math.random()
    document.getElementById("toggle")
}
document.querySelector("input[value=\"Hello\"]").onclick = test
function print(event){
    console.log(window.innerWidth+" "+window.outerWidth)
    // console.log(event)
}
