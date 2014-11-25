"use strict";
define(
[],
    function () {
        var run = function () {
            test('true should be equal to true', function () {
                equal(true, true, 'The return should be true.');
                equal(true, false, 'This should fail.');
            });
        };
        return {
            run: run
        }
    }
);
