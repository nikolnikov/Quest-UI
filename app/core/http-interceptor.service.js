HttpInterceptorService.$inject = ['$rootScope', '$q'];

function HttpInterceptorService($rootScope, $q) {
  

  function responseError(rejection) {
    $rootScope.$broadcast("httpError", rejection.status);
    return $q.reject(rejection);
  }

  return {
    responseError: responseError
  };
}

exports.HttpInterceptorService = HttpInterceptorService;