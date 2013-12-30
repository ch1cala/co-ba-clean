tasksApp
  .controller('ListCtrl', function($scope, $interval){

    var now = function(){
      return new Date().getTime();
    };

    $scope.done = function(task){
      if( $scope.staff ) {
        task.checkedAt = now();
        task.staff = $scope.staff;
      }
      else {
        alert('作業者名が記入されていません');
      }
    };

    $scope.sort = 'checkedAt';
    $scope.reverse = false;

    $scope.wait = 60*1000;

    $interval(function(){
      $scope.now = new Date();
    });

  });
