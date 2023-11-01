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

// serviceCard.each(function(index){
//     $(this).on("click", function(){
//         $(this).next().css("max-height")
//         ?$(this).next().css("max-height", "0")
//         :$(this).next().css("max-height") = $(this).prop("scrollHeight") + "px";
//     })
// })
var i;
for (i = 0; i < serviceCard.length; i++) {
    serviceCard[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }

