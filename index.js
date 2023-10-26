const toggleBtn = $(".toggle_btn");
const toggleBtnIcon = $(".toggle_btn i");
const dropDownMenu = $(".dropdown_menu");

toggleBtn.on("click", function(){
    dropDownMenu.toggleClass("open");
    dropDownMenu.hasClass("open")
    ?toggleBtnIcon.removeClass("fa fa-fw fa-bars").addClass("fa fa-fw fa-close")
    :toggleBtnIcon.removeClass("fa fa-fw fa-close").addClass("fa fa-fw fa-bars");
})

