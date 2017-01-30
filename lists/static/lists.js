/**
 * Created by gaurav on 1/30/17.
 */
var initialize = function() {
    $('input[name="text"]').on('keypress', function() {
        $('.has-error').hide();
    });
};