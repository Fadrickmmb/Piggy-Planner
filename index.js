function setName() {
    var name = document.getElementById("your-name-input").value;
    localStorage.setItem("name", name);
}

function getName() {
    var name = localStorage.getItem("name");
    document.getElementById("user-name").innerHTML = "Hey, " + name + "!" + <br></br> + "Are you ready?"
}

