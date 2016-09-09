app.controller('UserController',['userService', ' $mdBottomSheet',function(userService, $mdBottomSheet){
    var self = this;

    this.selected     = null;
    this.users        = [ ];
    
    userService
        .loadAllUsers()
        .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
        });

    this.selectUser = function (user) {
        this.selected = user;
    };
    
    this.makeContact = function (selectedUser) {
        $mdBottomSheet.show(
            {
                controllerAs     : "vm",
                controller       : [ '$mdBottomSheet', ContactSheetController],
                templateUrl      : './src/users/view/contactSheet.html',
                parent           : angular.element(document.getElementById('content'))
            }
        );
    };

}]);