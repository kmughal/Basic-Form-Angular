function radioOptions() {
    return {
        restrict: 'E',
        scope: {
            key: "@",
            label: '=',
            required: '=',
            options: '=',
            formName: '=',
            formData: '='
        },
        templateUrl: 'apps/create/form/form-controls/radio-option/radio-option-view.html'
    };
}

module.exports = radioOptions;