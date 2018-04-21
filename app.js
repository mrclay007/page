var app = angular.module('chatApp',['firebase']);

app.controller('ChaTController', function($scope, $firebaseArray){
	var ref = firebase.database().ref().child('messages');

	$scope.messages = $firebaseArray(ref)

	$scope.send =	function(){
		$scope.messages.$add({
			messages: $scope.messageText,
			date: Date.now()
		});
	}

});