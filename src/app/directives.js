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
            controllerAs: 'aboutController'
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
                let model = scope.model,
                    required = model.required ? 'required' : '',
                    otherMetaAttr = '';

                if (model.fieldMetas) {
                    otherMetaAttr = model.fieldMetas.reduce((acc, item) => {
                        let others = item.split('.'),
                            otherAttr = others[0],
                            otherVal = others[1];

                        acc = otherAttr + '="' + otherVal + '"';
                        return acc;
                    }, '');
                }

                let template = `<${model.fieldType} class="form-control" id="${model.id}" type="${model.inputType}" placeholder="${model.placeholder}" ${otherMetaAttr} ${required} data-validation-required-message="${model.validationMessage}">`,
                    formGroup = angular.element(element.get(0).querySelector('.form-group')),
                    content = $compile(template)(scope);

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

    angular.module('softbuilderModule')
    .directive('sbNavigation', sbNavigation)
    .directive('sbHeader', sbHeader)
    .directive('sbAbout', sbAbout)
    .directive('sbContact', sbContact)
    .directive('sbForm', sbForm)
    .directive('sbControlGroup', sbControlGroup)
    .directive('sbFooter', sbFooter)
    .directive('sbPortfolioGrid', sbPortfolioGrid)
    .directive('sbPortfolioModal', sbPortfolioModal);
})();
