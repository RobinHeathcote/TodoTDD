describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;
  var ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with several todos', function() {
    var todos = [
         new ToDoFactory('ToDo1', true),
         new ToDoFactory('ToDo2')
     ];

    expect(ctrl.todos).toEqual(todos);
  });

  it('adds a new todo', function (){
     var todos = ctrl.todos;
     ctrl.addToDo('ToDo3');
     expect(todos.length).toEqual(3);
   });

  it('removes the last todo', function() {
    var initialCount = ctrl.todos.length;
    ctrl.removeToDo();
    expect(ctrl.todos.length).toEqual(initialCount - 1);
  });


});
