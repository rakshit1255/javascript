
console.log("done")

// ==============================================================================
// ==============================================================================
// ==============================================================================


function formSubmits() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let about_textarea = document.getElementById("about_textarea").value;
    let spo_name = document.getElementById("s_name").value;
    let mrdvalid = document.getElementsByName('status');
    let gendervalid = document.getElementsByName('gender');
    let email = document.getElementById('emailid').value;
    
    if (fname == "") {
        alert("Please Enter First name");
    }
    else if(lname == ""){
        alert("Please Enter Last name");
    }
    else if(!(mrdvalid[0].checked || mrdvalid[1].checked)){
        alert("Please Select Maritial Status");
    }
    else if(mrdvalid[0].checked && spo_name==""){
            alert("Please Enter Spouse name");
    }
    else if(about_textarea == ""){
        alert("Please Enter about your self");
    }

    else if(!(gendervalid[0].checked || gendervalid[1].checked)){
        alert("Please Select Gender");
    }
    
    else if(email == ""){
        alert("Please Enter your Mail");
    }

    else{
         window.open("submited.html", '_blank');
    }

    localStorage.setItem("f_name", fname);
    localStorage.setItem("l_name", lname);
    localStorage.setItem("about_your", about_textarea);
    localStorage.setItem("s_name", spo_name);
    localStorage.setItem("s_name", spo_name);
}


// ==============================================================================
// ==============================================================================
// ==============================================================================


function emailValid() {

    let email = document.getElementById('emailid').value;
    let emailPattern = /[a-z]{1,10}[0-9]{1,4}@gmail[.]com$/ig;
    let valid = emailPattern.test(email);

    if (valid === true) {
        localStorage.setItem("email", email);
    } else {
        alert("Please Enter Valid Email Address")
    }
}

function marriedd(){
    let mrd = document.getElementById("married").checked;
    let spName = document.getElementById("Spo_name");

    if (mrd === true) {
        spName.style.display = "block";
        let marid="Married"
        localStorage.setItem("status", marid);
    }
    else {
        spName.style.display = "none";
        let marid="unMarried"
        localStorage.setItem("status", marid);
    }
}















// else if(true){

//     if (!(option[0].checked || option[1].checked)) {
//         alert("Please Select Your Gender");
//     }
    

//     var mrdValue = false;
//     if(mrdValue===false){
//         for(var i=0; i<mrdvalid.length;i++){
//             if(mrdvalid[i].checked == true){
//                 mrdValue = true;    
//             }else{
//                 alert("Please Select Maritial Status");
//             }
//         }
//     }
//     var genValue = false;
//     if(genValue===false){
//         for(var i=0; i<gendervalid.length;i++){
//             if(gendervalid[i].checked == true){
//                 genValue = true;    
//             }else{
//                 alert("Please Select gender");
//             }
//         }
//     }
// }