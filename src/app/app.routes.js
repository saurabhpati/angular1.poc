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
        }).when('/', {
            templateUrl: 'app/views/home.html'
        });
    });

    angular.module('softbuilderModule').config(($locationProvider) => {
        $locationProvider.hashPrefix('');
    });
})();