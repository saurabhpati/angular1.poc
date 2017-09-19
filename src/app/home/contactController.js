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
                    required: true,
                    validationMessage: 'Please enter your name.'
                },
                {
                    id: 'email',
                    name: 'Email Address',
                    fieldType: 'input',
                    inputType: 'email',
                    placeholder: 'Email Address',
                    required: true,
                    validationMessage: 'Please enter your email address.'
                },
                {
                    id: 'phone',
                    name: 'Phone Number',
                    fieldType: 'input',
                    inputType: 'tel',
                    placeholder: 'Phone Number',
                    required: true,
                    validationMessage: 'Please enter your phone number.'
                },
                {
                    id: 'message',
                    name: 'Message',
                    fieldType: 'textarea',
                    inputType: 'tel',
                    placeholder: 'Message"',
                    required: true,
                    validationMessage: 'Please enter a message.',
                    other: ['rows.5']
                }
            ]
        }
    }

    sbApp.$inject = ['$compile'];
    sbApp.controller('contactController', contactController);
})();