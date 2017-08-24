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


    function CreateItemFactory() {}

      CreateItemFactory.prototype.createItem = function(options, type) {
        switch(type) {
            case "vegetable":
                return new Vegetable(options);
                break;
            case "fruit":
                return new Fruit(options);
                break;
            case "meat":
                return new Meat(options);
                break;
            case "fish":
                return new Fish(options);
                break;
        }
      }

    var ShopDatabase = new CreateItemFactory();

    var Shop = (function(){

        var listOfItems = [];
        var shopForm = document.querySelector("form");
        var showItems = document.querySelector(".item-list");

        function addItemToShop() {

        }


        function render() {

        }

        function attachEvent() {
          shopForm.addEventListener("submit", function(e){
            e.preventDefault();
            var item = {
                        name: e.target.name.value,
                        type: e.target.item.value,
                        county: e.target.country.value,
                        }
          });
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
