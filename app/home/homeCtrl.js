'use strict';

angular.module('nodeFiddle.controllers')

.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");
}]);
