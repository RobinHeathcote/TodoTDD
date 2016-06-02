toDoApp.controller('ToDoController', ['toDoService','ToDoFactory', function(toDoService, ToDoFactory) {
  var self = this;

  toDoService.getAll().then(function(todos){
    self.todos = todos;

  });



  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function(){
    self.todos.pop();
  };
}]);
