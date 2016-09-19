var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/Form.html'
      });
      
});


app.controller('MainCtrl',  ['$scope', function($scope)
{
  
  var emailIds  = [
      'praveen.p@krds.fr',
      'balaji.p@krds.fr',
      'sneha.mv@krds.fr'
  ];

   $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

  $scope.formValidate   = function(isValid)
  {
      $scope.submitted = true;
      
     if(isValid)
     {
        alert('success');
     }
  };

}]);


app.service('AuthenticateService',function() 
{
     return {
       Email: function(email) {
          
          if(1==1)
            return true;
          else
            return false;
          
       }
    };
});



app.directive('validateRemote',  ['AuthenticateService', function(AuthenticateService) {
   return {
      restrict: 'A',
          require: 'ngModel',
          link: function(scope, elem, attrs, ctrls) 
          {
            var ngModel = ctrls;

            scope.$watch(attrs.ngModel, function(email) 
            {
                  var result = AuthenticateService.Email(email)
                  
                    if (result) 
                    {
                      console.log(ngModel.$setValidity('remote'));
                      ngModel.$setValidity('remote', true);
                      scope.$digest;
                    }
                    else 
                    {
                      console.log('succ');
                      ngModel.$setValidity('remote', false);
                    }
                  
            });
          }
        }
  }]);













