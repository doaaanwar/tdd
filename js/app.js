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
            nVal = Number(jQuery("#current").val());
            nTotal += nVal;
            var nHst = calculateHst(nTotal);
            jQuery("#tape").append(nVal.toFixed(2) + "<br />");
            jQuery("#current").val("");
            jQuery("#hst").html(nHst);
            jQuery("#subtotal").html(nTotal.toFixed(2));
            jQuery("#total").html((nTotal + Number(nHst)).toFixed(2));
            return false; // need to do this so that form doesn't reload
        });
    });
