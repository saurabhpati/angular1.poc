(function () {
    function contactController($compile, $http) {
        $http.get('http://localhost:49325/api/home/contact')
            .then((response) => {
                if (!response.data) {
                    throw "response does not have data";
                }

                let contactData = response.data;
                this.sectionId = contactData.id;
                this.sectionName = contactData.name;
                this.form = contactData.contactForm;
                let metaField = this.form.fields.find(field => { return field.fieldMetas });
                metaField.fieldMetas = metaField.fieldMetas.reduce((acc, meta) => {
                    acc.push(meta.metatype + '.' + meta.metavalue);
                    return acc;
                }, []);
            }, reason => console.log(reason))
            .catch(exception => console.log(exception));
    }

    contactController.$inject = ['$compile', '$http'];
    angular.module('softbuilderModule').controller('contactController', contactController);
})();