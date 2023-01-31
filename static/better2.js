
// console.log("efnowneofioe");
t_no = 1
t_no = localStorage.getItem('t_no')
localStorage.clear()

for(i=2;i<=t_no;i++){
    document.getElementById(`${i}`).style.display=""
    document.getElementById(`${i}`).children[1].children[1].setAttribute("required","required")
    document.getElementById(`${i}`).children[2].children[1].setAttribute("required","required")

}


function clearErrors(){

    errors = document.getElementById('formerror');
    // for(let item of errors)
    // {
    errors.innerHTML = "";
    // }


}
function seterror(id, error){
    //sets error inside tag of id 
    // element = document.getElementById(id);
    document.getElementById('formerror').innerHTML = error;

}




function validateForm(){
    var returnval = true;
    clearErrors();
    // console.log("pancho");
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.getElementById("l_name").value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.getElementById("l_mail").value;
    if (email.length>40){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.getElementById("l_phone").value;
    
    if(!(Number.isInteger(phone))){
    seterror("phone", "*Phone number should be in NUMBERS!");
    returnval=false;
    }


    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.getElementById("pass1").value;
    if (password.length < 6){

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.getElementById("pass2").value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }


    for(i=2;i<=t_no;i++){
    
        var name = document.getElementById(`name${i}`).value;
        if (name.length<5){
            seterror("name", `*Length of name${i} is too short`);
            returnval = false;
        }
    
        if (name.length == 0){
            seterror("name", `*Length of name${i} cannot be zero!`);
            returnval = false;
        }
    
        var email = document.getElementById(`mail${i}`).value;
        if (email.length>45){
            seterror("email", `*Email${i} length is too long`);
            returnval = false;
        }
    
    
    }

    // console.log(returnval);

    return returnval;
}

