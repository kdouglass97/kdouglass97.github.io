console.log("javascript")
//peri + sub
const periS = document.getElementById("periperi");
const subM = document.getElementById("subsub")

subM.style.visibility = "hidden";

//create an event listener for upon click
periS.addEventListener('click', check_peri)
subM.addEventListener('click', move_sub)

function check_peri(){
    periS.style.visibility = "hidden";
    subM.style.visibility = "visible";
}

function move_sub(){
    periS.style.visibility = "visible";
    subM.style.visibility = "hidden";
}
