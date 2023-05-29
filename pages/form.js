let form_list = document.getElementById("form-list");

    let email = form_list.querySelector("#exampleInputEmail1");
        console.log(email);
    let password = form_list.querySelector("#exampleInputPassword1");

    let checkbox = form_list.querySelector("#exampleCheck1");

form_list.addEventListener("submit", function(e) {
    e.preventDefault();

    checkEmpty( email,"Vui long nhap");

    checkEmpty( password,"Vui long nhap");

    check_box(checkbox,"Vui long nhap");

});

function checkEmpty(input,message) {
    if((input.value.trim()) == ""){
        input.style.border = "1px solid red";
        input.parentElement.querySelector("span").innerText = message;
    }else{
        input.style.border = "1px solid green";
        input.parentElement.querySelector("span").innerText = "";
    }
};

function check_box(input,message){
    if(input.checked){
        input.style.border = "1px solid green";
        input.parentElement.querySelector("span").innerText = "";
    }else{
        input.style.border = "1px solid red";
        input.parentElement.querySelector("span").innerText = message;
    }
};