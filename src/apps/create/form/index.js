function myagiForm() {
    return {
        restrict: 'E',
        templateUrl: 'apps/create/form/form-control.html',
        scope: {
            name: '=',
            fields: '=',
            addUser: '='
        }
    }
}
module.exports = myagiForm;