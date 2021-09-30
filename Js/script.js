function main(){

    let header={

        estado:{
        
            expandido:false
        },
        expandir(){

           document.querySelector(".header>nav").style.display="flex";
           document.getElementsByClassName("header__menu")[0].style.display="none";
           console.log("click");
        },
        contraer(){

            document.querySelector(".header>nav").style.display="none";
            document.getElementsByClassName("header__menu")[0].style.display="block";
            console.log("salio");
        }
    }
    document.getElementsByClassName("header")[0].addEventListener("click",header.expandir);
    document.getElementsByClassName("header")[0].addEventListener("mouseleave",header.contraer);
}
window.onload= main;
