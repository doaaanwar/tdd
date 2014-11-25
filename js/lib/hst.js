"use strict";
define([], function (getHst) {
    return function (nIn, sProvince) {
        switch (sProvince) {
        case 'AB':
            return (nIn * 0.05).toFixed(2);
        case 'MB':
        case 'NB':
        case 'NL':
        default:
            return (nIn * 0.13).toFixed(2);

        }
    };

});
