
var styles = require('./styles'),
    angular = require('angular'),
    coreController = require('./controller/core-controller'),
    fakeService = require('./service/fake-service'),
    FORM_SERVICE_URL = require('./common/constants').FORM_SERVICE_URL,
    textBox = require('./form/form-controls/text-box/text-box-directive'),
    emailBox = require('./form/form-controls/email-box/email-box-directive'),
    radioOptions = require('./form/form-controls/radio-option/radio-option-directive'),
    miyagiForm = require('./form/index');


angular.module('CreateApp', []);


angular.module('CreateApp')
    .constant('FORM_SERVICE_URL', FORM_SERVICE_URL)
    .factory('service', fakeService)
    .controller('coreController', coreController)
    .directive('textBox', textBox)
    .directive('emailBox', emailBox)
    .directive('radioOptions', radioOptions)
    .directive('miyagiForm', miyagiForm);



