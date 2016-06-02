describe('ToDoFactory', function () {
  beforeEach(module('toDoApp'));

  var todo;

  beforeEach(inject(function(ToDoFactory) {
    todo = new ToDoFactory('toDoText');
  }));

  it('by default a task is incomplete', function(){
    expect(todo.completed).toBe(false);
  });

  it('can complete as task', function(){
    todo.complete();
    expect(todo.completed).toBe(true);
  });

});
