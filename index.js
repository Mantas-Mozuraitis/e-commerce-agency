var checkbox = document.getElementById("side-menu");
checkbox.addEventListener("change", function(){

    var header = document.querySelector("header");
    var navigation = document.querySelector("nav");
    var main = document.querySelector("main");

    if(this.checked){
        header.classList.add("header-mobile");
        navigation.classList.add("nav-mobile");
        main.style.display = "none";
    }
    else{
        header.classList.remove("header-mobile");
        navigation.classList.remove("nav-mobile");
        main.style.display = "grid";

    }
})


