// task 1
const profile = document.getElementById("profile");
profile.style.backgroundColor= "cyan";
profile.style.padding = "15px";
profile.style.textAlign="center";


// task 2
const highlight = document.getElementsByClassName("important");
console.log(highlight.length)

for(let i=0 ; i<highlight.length;i++){
    highlight[i].style.color= "blue";
    highlight[i].style.fontSize= "30px";   
}

// task 3
// make evne p blue
// make odd p blue
