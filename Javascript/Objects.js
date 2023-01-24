"use strict";
exports.__esModule = true;
var singupPayload = {
    name: "Mufadal",
    email: "sadri@gmail.com",
    password: "1234",
    CreditCard: {
        CardNum: 9817181,
        exp: 2000,
        cvv: 111
    },
    hobbies: ["coding"]
};
var Signup = function (payload) {
    return true;
};
Signup(singupPayload);
