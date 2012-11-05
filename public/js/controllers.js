'use strict';

/* Controllers */


function HomeController() {

	$('#slider').nivoSlider({
		effect: 'fade'
	});

}
HomeController.$inject = [];

function FindUsController() {}
FindUsController.$inject = [];

function AboutController() {}
AboutController.$inject = [];

function ContactController($scope, $resource) {

  $scope.success = false;
  $scope.httpError = false;

  var Mailer = $resource('/email/send', {}, {
    send: {method:'POST'}
   });

  $scope.send = function() {
    var job = { job: $scope.msg };
    Mailer.send(job, function() {
      $scope.success = true;
      $scope.msg = {};
      angular.resetForm($scope, 'contactForm')
    }, function() {
      $scope.httpError = true;
    });

  };

}
ContactController.$inject = ['$scope', '$resource'];