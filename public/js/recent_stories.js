/**
 * Created by root on 24/05/17.
 */

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('.most-recent-stories').fadeIn();
    } else {
        $('.most-recent-stories').fadeOut();
    }
});