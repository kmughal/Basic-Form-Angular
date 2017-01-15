function emailBox() {
    return {
        restrict: 'E',
        scope: {
            label: '=',
            required: '=',
            errorMessages: '=',
            key: '@',
            formName: '=',
            formData: '='
        },
        templateUrl: 'apps/create/form/form-controls/email-box/email-box-view.html'
    }
}

module.exports = emailBox;