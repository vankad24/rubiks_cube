outs = document.getElementsByClassName("result")
left = outs[0]
reverse_l = outs[1]
right = outs[2]
reverse_r = outs[3]

input = document.getElementById("algorithm")

let is_right_hand = false
function processExpression(exp){
    exp = exp.trim().replace(/\s{2,}/g," ")
        .replaceAll("`","'")
        .toUpperCase()
    if (exp.includes(" '")||exp.includes(" 2"))return ""
    let count_r = 0
    let count_l = 0
    let allowedSymbols = "FBLRUDMSE2' "
    for (let i = 0; i < exp.length; i++) {
        if ( !allowedSymbols.includes(exp[i]) )return ""
        if (exp[i]==='R')count_r++;
        if (exp[i]==='L')count_l++;
    }
    is_right_hand = count_r>count_l
    return exp
}
function forAnotherHand(exp){
    return exp.split(" ").map((value)=>{
        if (value.includes("R"))value=value.replace("R","L")
        else value=value.replace("L","R")
        if (value.endsWith("'"))return value.slice(0,-1)
        else return value+"'"
    }).join(" ")
}
function reverse(exp){
    let result = ""
    let arr = exp.split(" ")
    for (let i =arr.length-1; i >= 0; i--) {
        if(arr[i].includes("'"))result+=arr[i].slice(0,-1)
        else result+=arr[i]+"'"
        result+=" "
    }
    return result.slice(0,-1)
}

document.querySelector("input[type='button']").onclick = () => {
    let right_exp = processExpression(input.value)
    let left_exp
    if (right_exp) {
        input.value = right_exp
        if (is_right_hand)left_exp = forAnotherHand(right_exp)
        else{
            left_exp = right_exp
            right_exp = forAnotherHand(right_exp)
        }
        left.textContent = left_exp
        right.textContent = right_exp
        reverse_l.textContent = reverse(left_exp)
        reverse_r.textContent = reverse(right_exp)

    }else if (input.value.length)alert("Недопустимый символ")
}