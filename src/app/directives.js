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
            templateUrl: 'app/views/about.html',
            controller: 'aboutController',
            controllerAs: 'aboutController',
            link: (scope, element, attr) => {

            }
        };
    }

    sbContact = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/contact.html',
            controller: 'contactController',
            controllerAs: 'contactController'
        };
    }

    sbForm = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/sb-form.html',
            scope: {
                model: '='
            }
        }
    }

    sbControlGroup = ($compile) => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/sb-control-group.html',
            scope: {
                model: '='
            },
            link: (scope, element, attr) => {
                let model = scope.model;
                let required = model.required ? 'required' : '';

                // TODO: include other metas into the template.
                if (model.other) {
                    var other = model.other.split('.');
                }
                let template = '<' + model.fieldType + ' class="form-control"' + ' id="' + model.id + '" type="' + model.inputType + '" placeholder="' + model.placeholder + '" ' + required + ' " data-validation-required-message=" ' + model.validationMessage + '">';
                let formGroup = angular.element(element.get(0).querySelector('.form-group'));
                let content = $compile(template)(scope);
                formGroup.append(content);
            }
        }
    }

    sbFooter = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/footer.html'
        };
    }

    sbPortfolioGrid = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/portfolio-grid.html'
        }
    }

    sbPortfolioModal = () => {
        return {
            restrict: 'E',
            templateUrl: 'app/views/portfolio-modal.html'
        }
    }

    sbApp.directive('sbNavigation', sbNavigation);
    sbApp.directive('sbHeader', sbHeader);
    sbApp.directive('sbAbout', sbAbout);
    sbApp.directive('sbContact', sbContact);
    sbApp.directive('sbForm', sbForm);
    sbApp.directive('sbControlGroup', sbControlGroup);
    sbApp.directive('sbFooter', sbFooter);
    sbApp.directive('sbPortfolioGrid', sbPortfolioGrid);
    sbApp.directive('sbPortfolioModal', sbPortfolioModal);
})();

