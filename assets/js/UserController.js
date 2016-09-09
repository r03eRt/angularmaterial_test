app.controller('UserController',['userService',function(userService){
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
    }

}]);