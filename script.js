var disableScroll = false;

$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    disableScroll = true;
});


// http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
var sections = $('.item'),
    nav = $('.navbar'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  if(disableScroll){
    disableScroll = false;
    return false;
  }
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent().removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});

function setTime(){
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var message = "";

    if(hour < 6){
        message = "night";
    }else if(hour < 12){
        message = "morning";
    }else if(hour < 18){
        message = "afternoon";
    }else if(hour < 24){
        message = "evening";
    }

    if(message !== ""){
        $("#time").html("Good " + message + ",");
    }

    console.log(message);
}

setTime();
