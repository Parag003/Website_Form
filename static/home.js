function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}
var t_name = getCookie("teamname")
console.log(t_name)


if(t_name !=""){
    window.location.replace("127.0.0.1:8000/zerohour/submitted2");
}













// i=1;

// function add_div(){
//     console.log("wifbiwf")

//     dnew = document.createElement("div")
//     dnew.classList.add("login-box")
//     dnew.setAttribute("id",`${i}`);
//     dnew.innerHTML = `       
//     <form id="my_form${i}" method="post" action="/submitted/">
//         {%csrf_token%}
//         <div id="inputs${i}">
//         </div>
//         </form>
//         `
//     _body.appendChild(dnew)


// }


// body = document.getElementsByTagName('body')[0]
// console.log(body)
// add_div()
// input = document.getElementById("input1")

// for(;i<=t_no;i++){
    
// }

