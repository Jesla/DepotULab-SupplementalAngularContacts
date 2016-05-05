var app = angular.module("ContactApp", ["ContactApp.controllers", "ngRoute", "ngResource"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/allcontacts.html",
            controller: "AllContactsController"
        })
        .when("/singlecontact/:singleContactView", {
            templateUrl: "views/singlecontact.html",
            controller: "SingleContactController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);