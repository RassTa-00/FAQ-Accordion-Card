const accordion = document.querySelectorAll(".questionAndAnswer")
//const icon = document.getElementById("icon")
const icon = document.querySelectorAll(".fa")
//i = 0; i<accordion.length;i++
console.log(accordion);
for(let i = 0;i<accordion.length;i+=1){
    let ico = "on";
    accordion[i].addEventListener("click", function(){
        this.classList.toggle('active')
        if(ico === "on"){
            icon[i].className = "fa fa-solid fa-minus"
            ico = "off"
        } else{
            icon[i].className = "fa fa-solid fa-plus"
            ico = "on"

        }
        

    })
}
