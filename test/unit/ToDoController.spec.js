describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, httpBackend, ToDoFactory;
  var toDos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    // This has underscores around it so we can then set it to a variable called
    // ToDoFactory, see:
    // https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDos);
    httpBackend.flush();
  }));

  it('initialises with several todos', function() {
    // Create todos now using the factory
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);

    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('adds a new todo', function() {
    ctrl.addToDo('NewToDo');

    // Similarly this now uses a factory
    var todo = new ToDoFactory("NewToDo");
    expect(ctrl.todos.pop()).toEqual(todo);
  });

  it('removes the last todo', function() {
    initialCount = ctrl.todos.length;

    ctrl.removeToDo();

    expect(ctrl.todos.length).toEqual(initialCount - 1);
  });

});
