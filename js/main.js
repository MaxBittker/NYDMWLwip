if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

$(document).ready(function() {
    // $('.navbar-nav li a').each(function(index) {
    //     if ($(this).attr('href') === "."+window.location.pathname) {
    //         $(this).parent().addClass("active");
    //     }
    // });
var url = window.location;
// Will only work if string in href matches with location

   $('.navbar-nav li a').filter(function() {
    return url.toString().includes(this.href);
}).parent().addClass('active');


});

function goBack() {
    window.history.back();
}