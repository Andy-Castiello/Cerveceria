function main(){

    let header={

        expandir(){

           document.querySelector(".header>nav").style.display="flex";
           document.getElementsByClassName("header__menu")[0].style.backgroundColor="red";
        },
        contraer(){

            document.querySelector(".header>nav").style.display="";
            document.getElementsByClassName("header__menu")[0].style.display="";
        }
    }
    document.getElementsByClassName("header")[0].addEventListener("click",header.expandir);
    document.getElementsByClassName("header")[0].addEventListener("mouseleave",header.contraer);
}


window.onload= main;
