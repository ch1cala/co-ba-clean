define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["n"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="panel panel-default" name="CategoryForm" ng-submit="addCategory()">\n  <div class="panel-body">\n    <div class="input-group">\n      <input class="form-control" type="text" name="title" ng-model="category.title" placeholder="あたらしいカテゴリー名" required>\n    <span class="input-group-btn">\n      <button class="btn btn-default" type="button" ng-class="{disabled:!CategoryForm.$valid}">追加</button>\n    </span>\n    </div>\n    <div ng-show="CategoryForm.$dirty && !CategoryForm.$valid">\n      <div class="text-warning" ng-show="CategoryForm.title.$error.required">カテゴリー名は必須です</div>\n    </div>\n  </div>\n</form>\n\n<div class="panel panel-default" ng-repeat="category in categories | orderBy:\'-id\' track by category.id">\n\n  <div id="category{{ category.id }}" class="panel-heading">{{ category.title }} <i class="glyphicon glyphicon-plus"></i></div>\n\n  <div class="panel-body">\n    <form name="TaskForm" ng-submit="addTask(category.id)">\n      <div class="input-group">\n        <input class="form-control" type="text" name="title" ng-model="task.title" placeholder="あたらしい作業内容" required>\n        <span class="input-group-btn">\n          <button class="btn btn-default" type="button" ng-class="{disabled:!TaskForm.$valid}">追加</button>\n        </span>\n      </div>\n      <div ng-show="TaskForm.$dirty && !TaskForm.$valid">\n        <div class="text-warning" ng-show="TaskForm.title.$error.required">作業内容は必須です</div>\n      </div>\n    </form>\n  </div>\n\n  <ul class="list-group" ng-repeat="task in tasks | filter:{category:category.id} | orderBy:\'-id\' track by task.id">\n    <li class="list-group-item">{{ task.title }}</li>\n  </ul>\n\n</div>\n';

}
return __p
};

this["JST"]["n"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n  作業者名：\n  <input type="text" ng-model="staff" placeholder="おなまえ">\n</div>\n\n<div class="panel panel-default" ng-if="staff" ng-repeat="category in categories | orderBy:\'id\' track by category.id">\n\n  <div class="panel-heading">{{ category.title }}</div>\n\n  <ul class="list-group" ng-repeat="task in tasks | filter:{category:category.id} | orderBy:\'checkedAt\' track by task.id">\n    <li class="list-group-item">\n      <button type="button" class="btn btn-default" ng-click="done(task)">Done</button>\n      <strong>{{ task.title }}</strong>\n      <small ng-if="task.checkedAt">\n        作業日時：{{ task.checkedAt | date:\'yyyy-MM-dd HH:mm:ss\' }}\n        作業者名：{{ task.staff }}\n      </small>\n    </li>\n  </ul>\n\n</div>\n';

}
return __p
};

  return this["JST"];

});