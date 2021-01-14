var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
var lakers = [
    "bradley",
    "pope",
    "caruso",
    "cook",
    "cousins",
    "james",
    "AD",
    "green",
    "howard",
    "kuzma",
    "McGee",
    "rando",
];
var lakersWithNumber = [
    { value: "bradley", number: 11 },
    { value: "pope", number: 1 },
    { value: "caruso", number: 4 },
    { value: "cook", number: 2 },
    { value: "cousins", number: 15 },
    { value: "james", number: 23 },
    { value: "AD", number: 3 },
    { value: "green", number: 14 },
    { value: "howard", number: 39 },
    { value: "kuzma", number: 0 },
];
// normal
export var handleFetchNormal = function (query) {
    return lakers.filter(function (player) { return player.includes(query); })
        .map(function (name) { return ({ value: name }); });
};
// synch
export var renderOptionSynch = function (item) {
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null,
            React.createElement("strong", null,
                "Name: ",
                item.value)),
        React.createElement("p", null,
            "number: ",
            item.number)));
};
export var handleFetchSynch = function (query) {
    return lakersWithNumber.filter(function (player) { return player.value.includes(query); });
};
// async
export var renderOptionAsync = function (item) {
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null,
            React.createElement("strong", null,
                "login: ",
                item.login))));
};
export var handleFetchAsync = function (query) {
    return fetch("https://api.github.com/search/users?q=" + query)
        .then(function (res) { return res.json(); })
        .then(function (_a) {
        var items = _a.items;
        // console.log(items);
        var formatItems = items
            .slice(0, 10)
            .map(function (item) { return (__assign({ value: item.login }, item)); });
        return formatItems;
    });
};
