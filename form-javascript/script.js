function submit(){
    a = document.getElementById("firstName").value
    b = document.getElementById("lastName").value
    c = document.getElementById("email").value
    d = document.getElementById("age").value
    e = {firstName: a, lastName: b, email: c, age: d,}
    alert(JSON.stringify(e))
}