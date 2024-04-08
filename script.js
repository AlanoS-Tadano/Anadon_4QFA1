//Checking of Name Input id="fullName"

function blurnamelogic() {
    var x = document.getElementById("fullName");

    if (x.value == "") {

        document.getElementById("fullName").style.borderColor = "Red";
        document.getElementById("fullName").style.background = "white";
        
    }else{
        document.getElementById("fullName").style.borderColor = "Green";
        document.getElementById("fullName").style.background = "white";
    }
}

function focusnamelogic(){
    document.getElementById("fullName").style.background = "lightgray";
}


//Checking of Username Input id="userName"

function bluruserlogic() {
    var y = document.getElementById("userName");

    if (y.value == "") {

        document.getElementById("userName").style.borderColor = "Red";
        document.getElementById("userName").style.background = "white";
        
    }else{
        document.getElementById("userName").style.borderColor = "Green";
        document.getElementById("userName").style.background = "white";
    }
}

function focususerlogic(){
    document.getElementById("userName").style.background = "lightgray";
}


//Checking of Password Input id="password"

function blurpasslogic() {
    var z = document.getElementById("password");

    if (z.value == "") {

        document.getElementById("password").style.borderColor = "Red";
        document.getElementById("password").style.background = "white";
        
    }else{
        document.getElementById("password").style.borderColor = "Green";
        document.getElementById("password").style.background = "white";
    }
}

function focuspasslogic(){
    document.getElementById("password").style.background = "lightgray";
}


//Checking of Email Add Input id="emailadd"

function blureaddlogic() {
    var a = document.getElementById("emailadd");

    if (a.value == "") {

        document.getElementById("emailadd").style.borderColor = "Red";
        document.getElementById("emailadd").style.background = "white";
        
    }else{
        document.getElementById("emailadd").style.borderColor = "Green";
        document.getElementById("emailadd").style.background = "white";
    }
}

function focuseaddlogic(){
    document.getElementById("emailadd").style.background = "lightgray";
}


//Checking of Home Address Input id="Address"

function bluractaddlogic() {
    var b = document.getElementById("Address");

    if (b.value == "") {

        document.getElementById("Address").style.borderColor = "Red";
        document.getElementById("Address").style.background = "white";
        
    }else{
        document.getElementById("Address").style.borderColor = "Green";
        document.getElementById("Address").style.background = "white";
    }
}

function focusactaddlogic(){
    document.getElementById("Address").style.background = "lightgray";
}


//Checking of Interests Input id="tArea"

function blurinterestslogic() {
    var c = document.getElementById("tArea");

    if (c.value == "") {

        document.getElementById("tArea").style.borderColor = "Red";
        document.getElementById("tArea").style.background = "white";
        
    }else{
        document.getElementById("tArea").style.borderColor = "Green";
        document.getElementById("tArea").style.background = "white";
        document.getElementById("submit").removeAttribute("disabled");
    }
}

function focusinterestslogic(){
    document.getElementById("tArea").style.background = "lightgray";
}

//Checking of Gender Select id="gender"

function blurgenderlogic() {
    var d = document.getElementById("gender");

    if (d.value == "") {

        document.getElementById("gender").style.borderColor = "Red";
        document.getElementById("gender").style.background = "white";
        
    }else{
        document.getElementById("gender").style.borderColor = "Green";
        document.getElementById("gender").style.background = "white";
    }
}

function focusgenderlogic(){
    document.getElementById("gender").style.background = "lightgray";
}

//Allowing of Submission and Print
function enabling() {
    if (x,y,z,a,b,c != "") {
    document.getElementById("submit").removeAttribute("disabled");
    }
}

function datasheet() {
    var fName = document.getElementById("fullName").value;
    var UName = document.getElementById("userName").value;
    var gender = document.getElementById("gender").value;
    var pass = document.getElementById("password").value;
    var EAdd = document.getElementById("emailadd").value;
    var AAdd = document.getElementById("Address").value;
    var Interests = document.getElementById("tArea").value;

    document.getElementById("inputteddata").innerHTML = 
    "Full Name: " + fName + "<br>" + 
    "Preferred Username: " + UName + "<br>" +
    "Gender: " + gender + "<br>" + 
    "Password: " + pass + "<br>" + 
    "Email Address: " + EAdd + "<br>" + 
    "Current Address: " + AAdd + "<br>" + 
    "Interests: " + Interests + "<br>";

    return false;
}

function erase() {
        document.getElementById("inputteddata").innerHTML = "";
        document.getElementById("fullName").style.borderColor = "Black";
        document.getElementById("userName").style.borderColor = "Black";
        document.getElementById("password").style.borderColor = "Black";
        document.getElementById("emailadd").style.borderColor = "Black";
        document.getElementById("Address").style.borderColor = "Black";
        document.getElementById("tArea").style.borderColor = "Black";
        document.getElementById("gender").style.borderColor = "Black";
}