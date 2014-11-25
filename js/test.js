"use strict";
require.config({
    paths: {
        'QUnit': 'https://code.jquery.com/qunit/qunit-1.15.0'
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});
// require the unit tests.
require(
['QUnit', 'tests/dummyTest', 'tests/hstTest'],
    function (QUnit, dummyTest, hstTest) {
        // run the tests.
        dummyTest.run();
        hstTest.run();
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);
