'use strict';
/* global cuid */
const Item = (function () {
  const itemObj = {};
  itemObj.validateName = function(name) {
    if (!name) {
      throw new TypeError('name does not exist');
    }
    return true;
  };

  itemObj.create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  return itemObj;
}());