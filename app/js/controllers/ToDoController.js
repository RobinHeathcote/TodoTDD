toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  ToDoService.getAll().then(function(todos){
    self.todos = todos;
  });

  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

  angular.element(document).ready(function () {
    self.toDosCount = function() {
      return self.todos.length;
    };
  });

  self.archive = function() {
    var oldTodos = self.todos;
    self.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.completed) self.todos.push(todo);
    });
  };
}]);
