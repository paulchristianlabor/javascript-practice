function calculateTip(){
    let tipExpense = document.getElementById('tipExpense').value
    let tipPercentage = document.getElementById('tipPercentage').value

    if(tipExpense !== "" && tipPercentage !== "") {
        let tipResult = (tipExpense * tipPercentage) / 100
        alert(tipResult)    
    }
    else {
        if(tipExpense === "" && tipPercentage === ""){
            //Display Error Message
            alert("Please Enter your Expenses and your Tip Percentage")
        }
        else if(tipExpense === ""){
            //Display Error Message
            alert("Please Enter your Expense")
        }
        else if(tipPercentage === ""){
            //Display Error Message
            alert("Please Enter a Percentage")
        }
    }
}