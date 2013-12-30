tasksApp
  .controller('EditCtrl', function($scope, storage){

    storage.bind($scope, 'tasksIndex', {defaultValue: 0});

    $scope.addCategory = function(){
      $scope.categories.push({
        title: this.category.title,
        show: 1
      });
      this.category.title = '';
      this.CategoryForm.$setPristine();
    };

    $scope.addTask = function(categoryId){
      $scope.tasks.push({
        id: ++$scope.tasksIndex,
        category: categoryId,
        title: this.task.title,
        checkedAt: 0
      });
      this.task.title = '';
      this.TaskForm.$setPristine();
    };

    $scope.taskInput = false;
  });
