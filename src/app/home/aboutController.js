// Contains the processes surrounding the about section.
(function () {
    function aboutController($http) {
        $http.get('http://localhost:49325/api/home/about')
            .then((response) => {
                if (!response.data) {
                    throw "response does not have data";
                }

                let aboutData = response.data;
                this.sectionId = aboutData.id;
                this.sectionName = aboutData.name;
                this.sectionData = aboutData.displaydatas;
            }, (reason) => {
                console.log(reason);
            })
            .catch((exception) => {
                console.log(exception);
            });
    }

    aboutController.$inject = ['$http'];
    sbApp.controller('aboutController', aboutController);
})();