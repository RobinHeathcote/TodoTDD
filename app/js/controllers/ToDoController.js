toDoApp.controller('ToDoController', ['ToDoFactory',function(ToDoFactory) {
  var self = this;

  this.todos = [new ToDoFactory('ToDo1', true),
                new ToDoFactory('ToDo2')
              ];

  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function(){
    self.todos.pop();
  };
}]);
