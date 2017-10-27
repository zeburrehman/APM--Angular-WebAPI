(function() {
    "use strict";

    angular.module("productManagement")
        .controller("ProductListCtrl", productListCtrl);

    function productListCtrl() {
        var vm = this;

        vm.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95
            },
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95
            },
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95
            },
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95
            },
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95
            },
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95
            }
        ];
    }
}());