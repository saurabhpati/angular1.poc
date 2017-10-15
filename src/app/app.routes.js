(() => {
    angular.module('softbuilderModule').config(($routeProvider) => {
        $routeProvider
        .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: 'contactController',
            controllerAs: 'contactController'
        })
        .when('/about', {
            templateUrl: 'app/views/about.html',
            controller: 'aboutController',
            controllerAs: 'aboutController'
        })
        .when('/', {
            templateUrl: 'app/views/home.html'
        });
    });

    /* This config is provided using location provider so as to suppress hash bang (#!) 
       being appended to the route by angular-route v1.6.x. */
    angular.module('softbuilderModule').config(($locationProvider) => {
        $locationProvider.hashPrefix('');
    });
})();