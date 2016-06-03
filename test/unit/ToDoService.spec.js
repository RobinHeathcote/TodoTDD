describe('ToDoService', function() {
  beforeEach(module('toDoApp'));

  var ToDoService, httpBackend;

  var toDos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function(_ToDoService_, _ToDoFactory_, $httpBackend) {
    ToDoService = _ToDoService_;
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of todos', function(){

    // Mock out our http call
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDos);

    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);

    ToDoService.getAll().then(function(todos) {
      // Wait for the response to come back before doing our expectation
      expect(todos).toEqual([todo1, todo2]);
    });

    // We have to flush httpBackend at the end of the test see
    // see https://docs.angularjs.org/api/ngMock/service/$httpBackend#flushing-http-requests
    httpBackend.flush();
  });
});
