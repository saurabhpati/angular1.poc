// This file bootstraps angular into the application.
(() => {
    angular.module('softbuilderModule', ['ngRoute']);
    /* using window.onload over document.onload because document.onload triggers when DOM is ready while 
     * window.onload is triggered when the page loading has finished. Upto until the running of this file, 
     * DOM is already ready but page load is not finished until this file runs to completion, so window.onload
     * works but document.onload does not. 
     */
    window.onload = () => {
        angular.bootstrap(document.body, ['softbuilderModule']);
        console.log('app has been initialized...');
    }
})();
