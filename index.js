const toggleBtn = $(".toggle_btn");
const toggleBtnIcon = $(".toggle_btn i");
const dropDownMenu = $(".dropdown_menu");

const serviceCard = $(".service-card");

toggleBtn.on("click", function(){
    dropDownMenu.toggleClass("open");
    dropDownMenu.hasClass("open")
    ?toggleBtnIcon.removeClass("fa fa-fw fa-bars").addClass("fa fa-fw fa-close")
    :toggleBtnIcon.removeClass("fa fa-fw fa-close").addClass("fa fa-fw fa-bars");
})
serviceCard.hover(function(){
    $(this).find("p").addClass("display-service-desc");
},
function(){
    $(this).find("p").removeClass("display-service-desc");
})

