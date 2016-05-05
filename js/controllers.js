var controllers = angular.module("ContactApp.controllers", []);
controllers.controller("AllContactsController", ["$scope", "$http", "$location", "ContactFactory", "$routeParams", function ($scope, $http, $location, ContactFactory, $routeParams) {

    $scope.contacts = ContactFactory.showAllContacts();

    $scope.addContact = function () {
        if ($scope.nameInput === undefined || $scope.emailInput === undefined || $scope.phoneInput === undefined) {
            alert("Please fill out all fields.");
        } else {
            $scope.contact = {
                name: $scope.nameInput,
                email: $scope.emailInput,
                phone: $scope.phoneInput,
            };
            $scope.contacts = ContactFactory.addContact($scope.contact);

        };
    }
    $scope.goToContact = function (name) {
        $location.path("singlecontact/" + name);
    };

}]);

controllers.controller("SingleContactController", ["$scope", "$location", "$routeParams", "ContactFactory",
    function ($scope, $location, $routeParams, ContactFactory) {

        $scope.singleConView = $routeParams.singleContactView;
        // console.log($scope.singleConView);
        $scope.singleConView = ContactFactory.singleContact($scope.singleConView)

        $scope.goBack = function () {
            $location.path("/");
        }

    }]);

