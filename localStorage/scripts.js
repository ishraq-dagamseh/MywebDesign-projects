let x=0;
function updateX(){
    document.getElementById('counter').innerHTML=x;
}
function increase(){
    x++;
    updateX();

}
function decrease(){
    x--;
    updateX();
}

function reset(){
    x=0;
     updateX();
}
// Function to save the counter
function save() {
  localStorage.setItem("counter", x);
}



function load(){
    let saved=localStorage.getItem('counter');
    if(saved!=null){
        x=Number(saved);
    }
    updateX();

}