"use strict";
exports.__esModule = true;
function addition(num) {
    return num + 2;
}
console.log(addition(10));
var makeUpper = function (val) {
    return val.toUpperCase();
};
console.log(makeUpper("makemeUpperCase"));
var SingUpUser = function (name, email, isPaid) {
    return {
        name: name,
        email: email,
        isPaid: isPaid
    };
};
console.log(SingUpUser("muffy", "sadrimufadal", false));
var Login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
Login("m", "m@gmail.com");
