var factories = angular.module("ContactApp");
factories.factory("ContactFactory", [function () {
    var allContacts = [];
    var f = {};
    f.showAllContacts = function () {
        // console.log("all contacts works");
        return allContacts;
    }

    f.addContact = function (newContact) {
        allContacts.push(newContact);
        return allContacts;
    }

    f.singleContact = function (singleConView) {
        for (let i = 0; i < allContacts.length; i++) {
            if (allContacts[i].name === singleConView) {
                return allContacts[i];
            }
        }
    }

    return f;

}]);



