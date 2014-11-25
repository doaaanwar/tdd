"use strict";
require.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
});

require(
['jquery', 'lib/hst'],
    function (jQuery, calculateHst) {
        var nTotal = 0;
        jQuery("#addingmachine").submit(function () {
            nTotal += Number(jQuery("#current").val());
            var nHst = calculateHst(nTotal);
            jQuery("#tape").append(jQuery("#current").val() + "<br />");
            jQuery("#current").val("");
            jQuery("#hst").html(nHst);
            jQuery("#total").html(nTotal + Number(nHst));
            return false;
        });
    });
