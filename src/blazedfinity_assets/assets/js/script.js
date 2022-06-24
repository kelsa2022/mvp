$(".brand_slider").owlCarousel({
      autoplay: true,
      dots: false,
      loop: true,
      items: 7,
      margin: 0,
      responsive: {
          0: { items: 2, margin: 15 },
          481: { items: 3 },
          561: { items: 4 },
          768: {items: 4},
          1025: {items: 5},
          1201: {items: 7}
      },
      autoHeight: true,
      smartSpeed: 1000,
});


$(document).ready (function(){
      $("span.icontab").click(function () {
            $(".overlay").addClass("mystyle");
            $("body").addClass("noscroll");
      });
       $(".closebtn").click(function () {
            $(".mystyle").removeClass("mystyle");
            $("body").removeClass("noscroll");
      });
});

$(document).ready (function(){
      $("span.icontab2").click(function () {
            $(".overlay2").addClass("mystyle2");
            $("body").addClass("noscroll");
      });
       $(".closebtn2").click(function () {
            $(".mystyle2").removeClass("mystyle2");
            $("body").removeClass("noscroll");
      });
});


$(document).ready(function() {
      $('.search span').click(function() {
            $('.header_content.profile .prifle_dtl .search .s_frm').fadeToggle();
      });
})

//  $(document).ready(function() {    
//   $('.dropdown').hover(function() {
//       $('ul.dropdown-menu', this).stop(true, true).slideDown('slow');
//       $(this).addClass('open');
//             }, function() {
//       $('ul.dropdown-menu', this).stop(true, true).slideUp('slow');
//       $(this).removeClass('open');
//       });      
//    });




