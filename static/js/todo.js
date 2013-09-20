var todoApp;
todoApp = angular.module('TodoApp', ['ngResource']);
todoApp.factory('TodoService', TodoService);
injectList = [
  '$scope',
  'TodoService',
  TodoController
];
todoApp.controller('TodoController', injectList);

function TodoController($scope, TodoService){
  $scope.newItem = '';
  $scope.items = [
    {"name": "Learning Angular"},
    {"name": "Build Angular App"}
  ];

  $scope.add = function(){
    var item = {name: $scope.newItem};
    $scope.items.push(item);
    $scope.newItem = '';
  }

  $scope.load = function(){
    $scope.items = TodoService.query();
  }

  $scope.save = function(){
    TodoService.save($scope.items)
  }
};

function TodoService($resource){
  var url, defaultParams, actions;
  url = 'https://armeo11.firebaseio.com/.json';
  defaultParams = {};
  actions = {
    save: { method: 'PUT', isArray: true}
  };

  return $resource(url, defaultParams, actions);
};
