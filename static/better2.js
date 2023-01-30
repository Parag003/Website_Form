
t_no = localStorage.getItem('t_no')
localStorage.clear()

for(i=2;i<=t_no;i++){
    document.getElementById(`${i}`).style.display=""
    document.getElementById(`${i}`).children[1].children[1].setAttribute("required","required")
    document.getElementById(`${i}`).children[2].children[1].setAttribute("required","required")

}
// function pass_match(){
//     console.log("dsef")

//     pass1 = document.getElementById('pass1').value
//     pass2 = document.getElementById('pass2').value
//     console.log(pass1,pass2)
//     if(pass1 == pass2){
//         // document.getElementById("my_form").submit()
//     }
//     else{
//         msg = "passwords don't match"
//     console.log("\n hurupa")
    
//     }

// }
