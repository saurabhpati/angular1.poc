(function () {
    function contactController($compile) {
        this.sectionId = 'contact';
        this.sectionName = 'Contact Me';
        this.form = {
            id: 'contactForm',
            fields: [
                {
                    id: 'name',
                    name: 'Name',
                    fieldType: 'input',
                    inputType: 'text',
                    placeholder: 'Name',
                    validationMessage: 'Please enter your name.'
                }
            ]
        }
    }

    sbApp.$inject = ['$compile'];
    sbApp.controller('contactController', contactController);
})();