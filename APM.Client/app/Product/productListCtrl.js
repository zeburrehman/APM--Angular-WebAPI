(function() {
    "use strict";

    angular.module("productManagement")
        .controller("ProductListCtrl", [productListCtrl]);

    function productListCtrl() {
        var vm = this;

        vm.products = this;

        //productResource.query(function(data) {
        //    vm.products = data;
        //});
    }
}());