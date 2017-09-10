(() => {

    sbNavigation = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/navigation.html'
        };
    }

    sbHeader = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/header.html'
        };
    }

    sbAbout = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/about.html'
        };
    }

    sbContact = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/contact.html'
        };
    }

    sbFooter = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/footer.html'
        };
    }

    sbApp.directive('sbNavigation', sbNavigation);
    sbApp.directive('sbHeader', sbHeader);
    sbApp.directive('sbAbout', sbAbout);
    sbApp.directive('sbContact', sbContact);
    sbApp.directive('sbFooter', sbFooter);
})();

