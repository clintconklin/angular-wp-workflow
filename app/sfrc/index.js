import css from './less/styles.less';
import $ from 'jquery';
import angular from 'angular';
import WreckedApp from '../script/app'; // base app

console.log('hi from sfrc... minified!!!');

// a controller
WreckedApp.controller('WreckedAngularController', ['$scope', function($scope) {
	$scope.greeting = 'Oh, why hullo there... from angular!';
}]);

// included controller
import controllerFn from  './script/controller';
WreckedApp.controller('WreckedAngularController2', [ '$scope', controllerFn ]);

$(function() {
	$('#wrecked-angular').before('<p>Hai sfrc, from jquery!</p>');
});

