function validatePassword(){
    var simpleFormPassword = document.getElementById("simpleFormPassword").value

    if (simpleFormPassword.length < 8){
        e.target("Please Enter atleast a minimum of 8 characters");
    }
    else if (simpleFormPassword.search(/[A-Z]/) < 0) {
        alert("Your password must contain at least one uppercase letter.");
    }
    else if (simpleFormPassword.search(/[a-z]/) < 0) {
        alert("Your password must contain at least one lowercase letter.");
    }
    else if (simpleFormPassword.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit."); 
    }
    else if (errors.length > 0) {
        alert("Please Enter a Password");
    }
}