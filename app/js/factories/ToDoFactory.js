toDoApp.factory('ToDoFactory', function() {

  // first, we declare the constructor for the model
  // just like Thermostat
  var Todo = function(todoText, completed){
    this.text = todoText;
    // We can't just set a default value of false until ES6 so we have to do this
    // See: http://stackoverflow.com/questions/894860/set-a-default-parameter-value-for-a-javascript-function
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };

  Todo.prototype.complete = function(){
    this.completed = true;
  };

  // then we return the constructor from the Factory
  return Todo;
});
