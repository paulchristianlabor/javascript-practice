function getInputValue(){
    var numOne = parseInt(document.getElementById("numFirst").value)
    var numTwo = parseInt(document.getElementById("numSecond").value)
    return { numOne , numTwo}
}

function btnCalculatePlus(){
    numThree = getInputValue()
    let result = parseInt(numThree.numOne) + parseInt(numThree.numTwo)
    document.getElementById("result").innerHTML = result
}
function btnCalculateMinus(){
    numThree = getInputValue()
    let result = parseInt(numThree.numOne) - parseInt(numThree.numTwo)
    document.getElementById("result").innerHTML = result
}
function btnCalculateTimes(){
    numThree = getInputValue()
    let result = parseInt(numThree.numOne) * parseInt(numThree.numTwo)
    document.getElementById("result").innerHTML = result
}
function btnCalculateDevide(){
    numThree = getInputValue()
    let result = parseInt(numThree.numOne) / parseInt(numThree.numTwo)
    document.getElementById("result").innerHTML = result
}