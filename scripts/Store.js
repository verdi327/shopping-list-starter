'use strict';
/* global Item, cuid */

const store = (function () {
  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findById: function (id) {
      return this.items.find(item => item.id === id);
    },
    addItem: function (name) {
      try {
        Item.validateName(name);
        this.items.push(Item.create(name));
      } catch (error) {
        console.log('Cannot add item' + error.message);
      }
    },
  };

}());

