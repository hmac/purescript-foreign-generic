/*global exports, require*/
"use strict";

exports.parseJSONImpl = function (str) {
  return JSON.parse(str);
};

exports.unsafeStringify = function (value) {
    return JSON.stringify(value);
};
