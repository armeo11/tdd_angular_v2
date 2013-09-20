describe('TodoController', function() {

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $controller('TodoController', {
      $scope: $scope,
    });
  }));

  it('should have 2 items after initialized', function() {
    expect($scope.items.length).toEqual((2));
  });
});

