app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});
app.config(function ($routeProvider){
    $routeProvider
    .when('/pins',{
        templateUrl:'partials/home.html',
        controller:'GeneralListCtrl'
    });
});