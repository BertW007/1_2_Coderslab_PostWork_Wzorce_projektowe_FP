document.addEventListener("DOMContentLoaded", function(){

    function Vegetable(options) {
      this.name = options.name;
      this.country = options.country;
      this.fridge = false;
      this.type = "vegetable";
    }

    function Fruit(options) {
      this.name = options.name;
      this.country = options.country;
      this.fridge = false;
      this.type = "fruit";
    }

    function Meat(options) {
      this.name = options.name;
      this.country = options.country;
      this.fridge = true;
      this.type = "meat";
    }

    function Fish(options) {
      this.name = options.name;
      this.country = options.country;
      this.fridge = true;
      this.type = "fish";
    }


    function CreateItemFactory(userType, options) {}

    CreateItemFactory.prototype.createItem = function(options, type) {

    }

    var Shop = (function(){

        var listOfItems = [];
        var shopForm = document.querySelector("form");
        var showItems = document.querySelector(".item-list");

        function addItemToShop() {

        }


        function render() {

        }

        function attachEvent() {

        }

        function init() {
            attachEvent();
        }

        return {
            init: init
        }

    })();

    Shop.init();

});
