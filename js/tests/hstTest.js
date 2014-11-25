"use strict";
define(
["lib/hst"],
    function (getHst) {
        var run = function () {
            test('hst for Ontario', function () {
                equal(getHst(10), 1.30, 'HST for $10 should be $1.30');
            });
            test('hst for Manitoba', function () {
                equal(getHst(10, 'MB'), 1.30, 'HST for $10 should be $1.30');
            });
            test('hst for New Brunswick', function () {
                equal(getHst(10, 'NB'), 1.30, 'HST for $10 should be $1.30');
            });
            test('hst for Newfoundland and Labrador', function () {
                equal(getHst(10, 'NL'), 1.30, 'HST for $10 should be $1.30');
            });
            test('gst for Alberta', function () {
                equal(getHst(10, 'AB'), 0.50, 'HST for $10 should be $0.50');
            });
            test('hst for Nova Scotia', function () {
                equal(getHst(10, 'NS'), 1.50, 'HST for $10 should be $1.50');
            });
        };
        return {
            run: run
        }
    }
);
