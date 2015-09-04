$(document).ready(function() {
    // $('.navbar-nav li a').each(function(index) {
    //     if ($(this).attr('href') === "."+window.location.pathname) {
    //         $(this).parent().addClass("active");
    //     }
    // });
var url = window.location;
// Will only work if string in href matches with location

   $('.navbar-nav li a').filter(function() {
    return this.href == url;
}).parent().addClass('active');

});
