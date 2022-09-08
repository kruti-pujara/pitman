// var flag = 1
function searchExpand() {
  if (jQuery(window).width() > 1199) {
    jQuery(".search.expandright").click(function () {
      jQuery(".search-container").toggleClass("expand");
      // flag = 0;
    });
  }
}
jQuery(document).ready(function () {
  jQuery(".hamburger").click(function () {
    jQuery("html,body").toggleClass("open-menu");
  });
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop()) {
      jQuery(".site-header").addClass("fix-nav");
    } else {
      jQuery(".site-header").removeClass("fix-nav");
    }
  });
  searchExpand();
});
jQuery(window).resize(function () {
  searchExpand();
});
