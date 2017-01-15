function textBox() {
    return {
        restrict: 'E',
        scope: {
            label: '=',
            required: '=',
            errorMessages: '=',
            key : '@' ,
            formName : '=',
            formData : '='
        },
        templateUrl: 'apps/create/form/form-controls/text-box/text-box-view.html'
    }
}

module.exports = textBox;