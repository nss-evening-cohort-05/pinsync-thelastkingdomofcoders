app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});
app.config(function ($routeProvider){
    $routeProvider
    .when('/auth',{
      templateUrl:'partials/auth.html',
      controller:'AuthCtrl'
    })
    .when('/home',{
        templateUrl:'partials/home.html',
        controller:'GeneralListCtrl'
    })
        .when('/logout',{
        templateUrl:'partials/auth.html',
        controller:'AuthCtrl'
    });
});