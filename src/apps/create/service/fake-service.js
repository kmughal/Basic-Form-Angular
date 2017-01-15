function Service($http,FORM_SERVICE_URL){
    var getDataFromService = function(){
        return $http.get(FORM_SERVICE_URL);
    }
    return {
        getFormData : getDataFromService
    };
}

module.exports = Service;