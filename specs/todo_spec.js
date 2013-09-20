describe('TodoController', function() {

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $controller('TodoController', {
      $scope: $scope,
      TodoService: null
    });
  }));

  it('should have 2 items after initialized', function() {
    expect($scope.items.length).toEqual((2));
  });
  it('should have Learning Angular as first item', function() {
    var firstItem = $scope.items[0].name;
    expect(firstItem).toEqual('Learning Angular');
  });
  it('should have Build Angular App as second item', function() {
    var secondItem = $scope.items[1].name;
    expect(secondItem).toEqual('Build Angular App');
  });

  describe('Add Function', function(){
    it('should have 3 item after added', function(){
      $scope.newItem = 'Eat lunch';
      $scope.add();
      expect($scope.items.length).toEqual(3);
    });
    it('should clear new item box after added', function(){
      $scope.newItem = 'Eat lunch';
      $scope.add();
      expect($scope.newItem).toEqual('');
    });
  });

  describe('Save Function', function(){
  });
});
