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

    findAndToggleChecked: function(id) {
      const item = this.findById(id);
      item.checked = !item.checked;
    },

    findAndUpdateName: function(id, newName) {
      const item = this.findById(id);
      try {
        Item.validateName(newName);
        item.name = newName;
      } catch(error) {
        console.log(`[ERROR]: ${error.message}`);
      }
    },

    findAndDelete: function(id) {
      const itemIdx = this.items.findIndex(item => item.id === id);
      this.items.splice(itemIdx, 1);
    },
    toggleCheckedFilter: function() {
      this.hideCheckedItems = !this.hideCheckedItems;
    },
    setSearchTerm: function(val){
      this.searchTerm = val;
    }
  };

}());

