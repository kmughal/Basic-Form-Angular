function coreController(service) {
    var vm = this;
    vm.fields = [];
    vm.createUser = addNewUser;

    /*Private*/
    function addNewUser(event, form, formData) {
        alert("to see form data input values see console,this form is " + (form.$valid ? "valid" : "invalid"));
        console.log(formData);
        event.preventDefault();
    }

    activate();
    function activate() {
        var promise = service.getFormData();
        promise.then(
            /*success*/
            function (response) {
                if (response && response.data && response.data.fields) {
                    vm.fields = response.data.fields;
                }
            }
            /*error*/
            , function (response) {
                alert(response);
            })
    }
}

module.exports = coreController;