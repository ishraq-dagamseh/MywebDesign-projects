function validationForm(){
    let txt=document.forms["myForm"]["fname"].value;
    if(txt.trim() === ""){
        alert("You must Fill your name!");
        return false;
    }
    return true;
}