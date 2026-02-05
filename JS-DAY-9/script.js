const para = document.getElementsByTagName
("p");
for(let i=0;i<para.length;i++) {
    if(i%2===0){
         para[i].style.color="blue" 
    }
    else{
        para[i].style.color="green" 
    }
}
para[para.length-1].style.
fontWeight="bold"





 // create a new element and append
const newpara = document.createElement("p");
newpara.textContent="This is a dynamically created paragraph";
console.log(newpara)
document.getElementById("content").append
(newpara);