describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, httpBackend, ToDoFactory;
  var toDoData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;

    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);

    httpBackend.flush();

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
