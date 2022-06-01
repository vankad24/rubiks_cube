function fillContent(selector, fromFile){
    fetch(fromFile)
        .then((response) => {
            // console.log("resp " + response);
            return response.text();
        })
        .then((data) => {
            document.querySelector(selector).innerHTML = data
            console.log("filled content "+data)
        });

}

fillContent(".menu","menu.html")

main_height = document.getElementsByClassName("main-div")[0]
fog = document.getElementById("fog")
tog = document.getElementById("toggle")

tog.addEventListener("click", () => fog.classList.toggle('show'))
fog.onclick = () => tog.click()


/*function test(ev){
    // el = document.getElementById("test")
    // el.innerText = Math.random()
    document.getElementById("toggle")
}
document.querySelector("input[value=\"Hello\"]").onclick = test
function print(event){
    console.log(window.innerWidth+" "+window.outerWidth)
    // console.log(event)
}*/

